const https = require('https');
const fs = require('fs');
const crypto = require('crypto');
const path = require('path');
const vm = require('vm');

const BASE_URL = 'https://canalesonline.netlify.app';
const MARKER_START = '// ---- INICIO: CANALES AUTO-GENERADOS ----';
const MARKER_END = '// ---- FIN: CANALES AUTO-GENERADOS ----';
const MARKERS_FILTRO_START = '// ---- INICIO: FILTRO SERVIDORES AUTO-GENERADO ----';
const MARKERS_FILTRO_END = '// ---- FIN: FILTRO SERVIDORES AUTO-GENERADO ----';
const MARKERS_ENLACES_START = '// ---- INICIO: ENLACES SERVIDORES AUTO-GENERADO ----';
const MARKERS_ENLACES_END = '// ---- FIN: ENLACES SERVIDORES AUTO-GENERADO ----';
const MARKERS_MAPEO_START = '// ---- INICIO: MAPEO SERVIDORES AUTO-GENERADO ----';
const MARKERS_MAPEO_END = '// ---- FIN: MAPEO SERVIDORES AUTO-GENERADO ----';

const FILES = [
    {
        remote: '/servidores/asd.js',
        local: 'servidores/asd.js',
        mode: 'replace',
        label: 'asd.js (canales, keys, DRM)'
    },
    {
        remote: '/js/script-ch.js',
        local: 'js/script-ch.js',
        mode: 'markers',
        label: 'script-ch.js (enlaces, canales)'
    }
];

// Archivos auxiliares que se sincronizan completos por hash
const AUX_FILES = [
    { remote: '/css/style-pro.css', local: 'css/style-pro.css', label: 'style-pro.css' },
    { remote: '/css/style-pro2.css', local: 'css/style-pro2.css', label: 'style-pro2.css' },
    { remote: '/servidores/style-jw.css', local: 'servidores/style-jw.css', label: 'style-jw.css' },
];

function fetch(url, redirects = 0) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'user-agent': 'Mozilla/5.0' } }, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                res.resume();
                if (redirects > 5) {
                    reject(new Error(`HTTP ${res.statusCode} (demasiados redirects)`));
                    return;
                }
                resolve(fetch(new URL(res.headers.location, url).toString(), redirects + 1));
                return;
            }
            if (res.statusCode !== 200) {
                reject(new Error(`HTTP ${res.statusCode}`));
                return;
            }
            let data = [];
            res.on('data', c => data.push(c));
            res.on('end', () => resolve(Buffer.concat(data)));
        }).on('error', reject);
    });
}

function sha256(buf) {
    return crypto.createHash('sha256').update(buf).digest('hex');
}

// Reemplaza TODAS las apariciones de oldS por newS (sin regex).
function replaceAll(content, oldS, newS) {
    return content.split(oldS).join(newS);
}

// Reemplazo idempotente: aplica solo si oldS aparece y newS aún no existe.
function ifReplace(content, oldS, newS) {
    return content.includes(newS) ? content : replaceAll(content, oldS, newS);
}

// Aplica un parche PATCHES a un buffer descargado (normalizando EOL según el
// archivo original). Devuelve el mismo buffer si no hay parche.
function aplicarParche(buf, basename) {
    const parche = PATCHES[basename];
    if (!parche) return buf;
    const hashOriginal = sha256(buf);
    const out = Buffer.from(parche(buf.toString('utf8')), 'utf8');
    console.log(`  Parche local aplicado: ${hashOriginal.slice(0, 8)} -> ${sha256(out).slice(0, 8)}`);
    return out;
}

// Extrae todos los MisCanales.set(...) del contenido remoto
function extractChannelSets(content) {
    const blocks = [];
    let searchFrom = 0;

    while (searchFrom < content.length) {
        const start = content.indexOf('MisCanales.set(', searchFrom);
        if (start === -1) break;

        const lineStart = content.lastIndexOf('\n', start - 1);
        const linePrefix = content.slice(lineStart + 1, start).trim();
        if (linePrefix.startsWith('//')) {
            searchFrom = start + 16;
            continue;
        }

        let depth = 0;
        let pos = start;
        let found = false;
        while (pos < content.length) {
            const ch = content[pos];
            if (ch === '(') depth++;
            else if (ch === ')') {
                depth--;
                if (depth === 0) {
                    let end = pos + 1;
                    if (end < content.length && content[end] === ';') {
                        end++;
                    }
                    blocks.push(content.slice(start, end));
                    found = true;
                    searchFrom = end;
                    break;
                }
            }
            pos++;
        }
        if (!found) break;
    }
    return blocks;
}

// Extrae nombres de archivo de servidor referenciados en script-ch.js
function extractServerFilenames(content) {
    const files = new Set();
    const regex = /servidorCanalesOnline\s*\+\s*"([^"]+)"/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        const pathStr = match[1];
        const fileMatch = pathStr.match(/^([^/?]+)/);
        if (fileMatch) {
            const name = fileMatch[1];
            if (name.endsWith('.html') || name.endsWith('.js')) {
                files.add(name);
            }
        }
    }
    return [...files];
}

// Extrae el filtro negro global (el que corre en navegadores normales)
// Usa como ancla el includes de tvmia y retrocede hasta el MisCanales.forEach contiguo
function extractFilterBlock(content) {
    const anchor = '!link.includes("tvmia.html?stream=an_")';
    const idx = content.indexOf(anchor);
    if (idx === -1) return null;

    const startPat = 'MisCanales.forEach((canal, nombre, map) => {';
    const start = content.lastIndexOf(startPat, idx);
    if (start === -1) return null;

    return extractBalancedBlock(content.slice(start), startPat, '{', '}');
}

// Extrae un bloque balanceado que comienza con un patrón dado.
// startMarker: texto que inicia el bloque (debe terminar con el openChar,
// p.ej. "const enlacesServidor = {"). open/close: paréntesis o llaves.
// El openChar del propio marcador abre el nivel 1; se cierra cuando la
// profundidad vuelve a 0 (consumiendo si hay ');' o ';' pegados).
function extractBalancedBlock(content, startMarker, openChar, closeChar) {
    const start = content.indexOf(startMarker);
    if (start === -1) return null;

    const openIdx = content.indexOf(openChar, start);
    if (openIdx === -1) return null;

    let depth = 0;
    let pos = openIdx;
    while (pos < content.length) {
        const ch = content[pos];
        if (ch === openChar) {
            depth++;
        } else if (ch === closeChar) {
            depth--;
            if (depth === 0) {
                let end = pos + 1;
                while (end < content.length &&
                       (content[end] === ';' || content[end] === ')')) {
                    end++;
                }
                return content.slice(start, end);
            }
        }
        pos++;
    }
    return null;
}

// Extrae el bloque de mapeo de servidores de nivel superior del remoto:
// las variables cvattproserver/cvattserver/cvatt2server, el IIFE que reescribe
// los enlaces cvatt* en runtime y los atob() que definen los actores finales.
// Sincronizarlo garantiza que las opciones queden SIEMPRE idénticas a la
// original (ej: cvatt.html?get= -> cvattpro_token.html?get=).
function extractMapeoServidores(content) {
    const start = content.indexOf('let cvattproserver = "cvatt_pro.html?get=";');
    if (start === -1) return null;
    const keyAnchor = 'cvatt2server = atob("';
    const k = content.indexOf(keyAnchor, start);
    if (k === -1) return null;
    const end = content.indexOf(';', k);
    if (end === -1) return null;
    return content.slice(start, end + 1) + '\n';
}

// Definición de secciones marcadas que se sincronizan dentro de script-ch.js
function getSections() {
    return [
        {
            name: 'canales',
            start: MARKER_START,
            end: MARKER_END,
            content: (remoteContent) => {
                const blocks = extractChannelSets(remoteContent);
                return blocks.length ? blocks.join('\n\n') + '\n' : null;
            },
            countLabel: (remoteContent) => `${extractChannelSets(remoteContent).length} canales`
        },
        {
            name: 'filtro',
            start: MARKERS_FILTRO_START,
            end: MARKERS_FILTRO_END,
            content: (remoteContent) => {
                const block = extractFilterBlock(remoteContent);
                return block ? block + '\n' : null;
            },
            countLabel: () => 'bloque mis canales'
        },
        {
            name: 'enlaces',
            start: MARKERS_ENLACES_START,
            end: MARKERS_ENLACES_END,
            content: (remoteContent) => {
                const block = extractBalancedBlock(remoteContent,
                    'const enlacesServidor = {', '{', '}');
                return block ? block + '\n' : null;
            },
            countLabel: () => 'bloque enlacesServidor'
        },
        {
            name: 'mapeo',
            start: MARKERS_MAPEO_START,
            end: MARKERS_MAPEO_END,
            content: (remoteContent) => {
                const block = extractMapeoServidores(remoteContent);
                return block ? block : null;
            },
            countLabel: () => 'bloque mapeo servidores'
        }
    ];
}

// Sincroniza cada sección remarcada: reemplaza el contenido entre los
// marcadores locales por la versión extraída del remoto.
function syncSections(localContent, remoteContent, warnings, fileLabel) {
    let result = localContent;
    let errores = 0;

    for (const section of getSections()) {
        const startIdx = result.indexOf(section.start);
        const endIdx = result.indexOf(section.end);

        if (startIdx === -1 || endIdx === -1) {
            console.log(`  ERROR: Faltan marcadores de '${section.name}' en el archivo local`);
            warnings.push(`${fileLabel}: faltan marcadores de '${section.name}'`);
            errores++;
            continue;
        }

        const remoteSection = section.content(remoteContent);
        if (remoteSection === null) {
            console.log(`  ERROR: No se encontró '${section.name}' en el remoto`);
            warnings.push(`${fileLabel}: no se encontró '${section.name}' en el remoto`);
            errores++;
            continue;
        }

        const beforeMarker = result.slice(0, startIdx + section.start.length);
        const afterMarker = result.slice(endIdx);
        const currentSection = result.slice(startIdx + section.start.length, endIdx);

        const currentHash = sha256(Buffer.from(currentSection.trim()));
        const remoteHash = sha256(Buffer.from(remoteSection.trim()));
        console.log(`  Sección ${section.name}: hash local=${currentHash.slice(0, 8)} remote=${remoteHash.slice(0, 8)} (${section.countLabel(remoteContent)})`);

        if (currentHash !== remoteHash) {
            result = beforeMarker + '\n' + remoteSection + afterMarker;
            console.log(`  >> sección '${section.name}' será actualizada`);
        }
    }

    if (errores > 0) return null;
    return result;
}

// Valida sintaxis de un archivo JS usando node --check sin ejecutarlo.
function validarSintaxis(jsContent) {
    const { spawnSync } = require('child_process');
    const tmp = path.join(require('os').tmpdir(),
        `chk-${Date.now()}-${Math.random().toString(36).slice(2)}.js`);
    try {
        fs.writeFileSync(tmp, jsContent, 'utf8');
        const r = spawnSync(process.execPath, ['--check', tmp], { encoding: 'utf8' });
        return r.status === 0;
    } finally {
        if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
    }
}

// Ejecuta el script-ch.js resultante en un sandbox (VM) con mocks de navegador,
// simulando el ORIGEN del sitio. Necesario porque el script accede a window,
// document, navigator, atob, etc.
function ejecutarPipeline(jsContent, origin) {
    const u = new URL(origin);
    const loc = {
        pathname: '/index.html', href: origin + '/index.html', search: '',
        host: u.host, hostname: u.hostname, origin: u.origin, protocol: u.protocol,
        replace() {}, assign() {}
    };
    const doc = {
        cookie: '', title: '', readyState: 'complete',
        createElement: () => ({ setAttribute() {}, getAttribute: () => null, addEventListener() {}, appendChild() {}, style: {}, src: '', textContent: '' }),
        getElementsByTagName: () => [], getElementById: () => null,
        querySelector: () => null, querySelectorAll: () => [],
        addEventListener() {}, removeEventListener() {},
        body: { innerHTML: '', appendChild() {}, style: {} },
        head: { innerHTML: '', appendChild() {} },
        documentElement: { style: {} }
    };
    const sandbox = {
        window: {
            location: loc, MSStream: undefined,
            addEventListener() {}, removeEventListener() {},
            innerWidth: 1280, innerHeight: 720, scrollTo() {}, scrollY: 0,
            stop() {}, onload: null
        },
        location: loc, document: doc,
        navigator: { userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0' },
        atob: s => Buffer.from(s, 'base64').toString('utf8'),
        btoa: s => Buffer.from(s).toString('base64'),
        URL: URL, alert: () => {},
        console: { log() {}, warn() {}, error() {}, clear() {} },
        history: { pushState() {}, replaceState() {} },
        setInterval: () => 1, setTimeout: () => 1,
        clearInterval() {}, clearTimeout() {}
    };
    const ctx = vm.createContext(sandbox);
    vm.runInContext(jsContent, ctx, { filename: 'script-ch-sync.js' });
    return {
        MisCanales: vm.runInContext('MisCanales', ctx),
        servidorCanalesOnline: vm.runInContext('servidorCanalesOnline', ctx)
    };
}

// Test: cuenta opciones de un canal clave (TNT) tras el pipeline, en un origen dado.
// Devuelve { canales, canalCount, enlaces, ok } o { error }.
function testCanal(jsContent, nombreCanal, origin) {
    try {
        const { MisCanales } = ejecutarPipeline(jsContent, origin);
        const canal = MisCanales.get(nombreCanal);
        return {
            canales: MisCanales.size,
            canal: nombreCanal,
            canalCount: canal ? canal.enlaces.length : 0,
            enlaces: canal ? canal.enlaces : [],
            ok: true
        };
    } catch (e) {
        return { ok: false, error: e.message };
    }
}

// Lista de archivos servidores referenciados por los enlaces y si existen localmente
function verificarServidores(enlaces, repoRoot) {
    const faltantes = [];
    for (const e of enlaces) {
        const m = /servidores\/([^?]+)/.exec(e);
        if (!m) continue;
        const file = m[1];
        if (!fs.existsSync(path.join(repoRoot, 'servidores', file))) {
            faltantes.push(file);
        }
    }
    return faltantes;
}

// Archivos que la original lista pero que están cubiertos por un transformador
// local en runtime (ej: cvatt.html -> cvattpro_token.html), por lo que nunca se
// sirven realmente. Si el remoto ya no los tiene, no debe ser un error.
const CUBIERTOS_POR_TRANSFORMADOR = new Set([
    'cvatt.html'
]);

// Servidores que el sitio usa en runtime pero que NO aparecen como literal
// "servidorCanalesOnline + 'x.html'" en el script-ch.js remoto (porque el actor
// final solo existe en base64 dentro del mapeo). Hay que descargarlos siempre.
// REESTRUCTURACION: se agregaron canalesparatodos_ext.html y canalesparatodos.html
// (opciones 1/2 de TNT) para que queden byte-idénticos al remoto aunque la
// original ya no los liste en script-ch.js.
const SERVERS_ADICIONALES = [
    'cvattpro_token.html',
    'canalesparatodos_ext.html',
    'canalesparatodos.html',
    'cHV0byBlbCBxdWUgcm9iYQ.js'
];

// Parches locales que se aplican DESPUÉS de descargar un archivo del remoto.
// REESTRUCTURACION (2026-09-05): se ELIMINARON los parches de comportamiento —
// guard v2 de reinicios (cvattpro_token/canalesparatodos_ext/canalesparatodos) y
// "token por canal" en asd.js — para que los archivos de reproducción queden
// byte-idénticos a la original (canalesonline.netlify.app). Lo gratuito (modal,
// donaciones, analytics) vive en js/script-config.js y js/script-canalespro.js, que
// NO se sincronizan. Si en el futuro hacen falta parches, se agregan acá y DEBEN
// ser idempotentes.
const PATCHES = {};

// Descarga un archivo remoto y lo actualiza localmente si cambió
async function syncFile(remotePath, localPath, label, dryRun) {
    const remoteUrl = BASE_URL + remotePath;
    console.log(`\n  Descargando: ${remoteUrl}`);

    let remoteBuf;
    let descargaErr = null;
    try {
        remoteBuf = await fetch(remoteUrl);
    } catch (e) {
        descargaErr = e.message;
    }

    const localExists = fs.existsSync(localPath);

    if (descargaErr) {
        const basename = path.basename(localPath);
        // El remoto no tiene este archivo (404). Si localmente existe, se conserva
        // sin errores (es una referencia que la original ya no sirve). Si NO existe
        // localmente pero está cubierto por un transformador local, tampoco es error.
        if (localExists) {
            console.log(`  No disponible en remoto (${descargaErr}). Se conserva el archivo local.`);
            return { changed: false };
        }
        if (CUBIERTOS_POR_TRANSFORMADOR.has(basename)) {
            console.log(`  No disponible en remoto (${descargaErr}). Cubierto por transformador local, no se necesita.`);
            return { changed: false };
        }
        console.log(`  ERROR: No se pudo descargar: ${descargaErr}`);
        return { changed: false, error: descargaErr };
    }

    // Aplicar parche local al contenido remoto antes de hashear/escribir
    remoteBuf = aplicarParche(remoteBuf, path.basename(localPath));

    const remoteHash = sha256(remoteBuf);
    const localHash = localExists ? sha256(fs.readFileSync(localPath)) : 'no existe';

    console.log(`  Hash remote: ${remoteHash}`);
    console.log(`  Hash local:  ${localHash}`);

    if (!localExists || remoteHash !== localHash) {
        fs.mkdirSync(path.dirname(localPath), { recursive: true });
        const action = localExists ? 'ACTUALIZADO' : 'CREADO (nuevo)';
        if (dryRun) {
            console.log(`  >>> ${action} (dry-run, no se escribe)`);
        } else {
            if (localExists) {
                const backupPath = `${localPath}.backup`;
                fs.copyFileSync(localPath, backupPath);
                console.log(`  Backup creado: ${backupPath}`);
            }
            fs.writeFileSync(localPath, remoteBuf);
            console.log(`  >>> ${action}`);
        }
        return { changed: true };
    }

    console.log(`  Sin cambios`);
    return { changed: false };
}

async function main() {
    const repoRoot = path.resolve(__dirname, '..');
    const dryRun = process.argv.includes('--dry-run');
    let hasChanges = false;
    let asdRemoteDisponible = true;
    let warnings = [];
    let remoteScriptChContent = null;

    // --- PASO 1: Procesar archivos principales (asd.js y script-ch.js) ---
    for (const file of FILES) {
        const localPath = path.join(repoRoot, file.local);
        const remoteUrl = BASE_URL + file.remote;

        console.log(`\n[${file.label}]`);
        console.log(`  Descargando: ${remoteUrl}`);

        let remoteBuf;
        let descargaErr = null;
        try {
            remoteBuf = await fetch(remoteUrl);
        } catch (e) {
            descargaErr = e.message;
        }

        const localExiste = fs.existsSync(localPath);

        if (descargaErr) {
            if (file.remote === '/servidores/asd.js') asdRemoteDisponible = false;
            if (localExiste) {
                console.log(`  No disponible en remoto (${descargaErr}). Se conserva el archivo local.`);
                continue;
            }
            console.log(`  ERROR: No se pudo descargar: ${descargaErr}`);
            warnings.push(`${file.local}: no se pudo descargar (${descargaErr})`);
            continue;
        }

        if (file.mode === 'replace') {
            // Aplicar parche local (ej: asd.js token por canal) antes de comparar
            remoteBuf = aplicarParche(remoteBuf, path.basename(localPath));

            const localHash = localExiste
                ? sha256(fs.readFileSync(localPath))
                : 'no existe';
            const remoteHash = sha256(remoteBuf);

            console.log(`  Hash remote: ${remoteHash}`);
            console.log(`  Hash local:  ${localHash}`);

            if (remoteHash !== localHash) {
                const action = dryRun ? 'CAMBIO (dry-run, no se escribe)' : 'ACTUALIZADO';
                console.log(`  CAMBIO DETECTADO -> ${action}`);
                if (!dryRun) fs.writeFileSync(localPath, remoteBuf);
                hasChanges = true;
            } else {
                console.log(`  Sin cambios`);
            }
        } else if (file.mode === 'markers') {
            const remoteContent = remoteBuf.toString('utf8');
            remoteScriptChContent = remoteContent; // Guardar para extraer servidores
            const localContent = fs.readFileSync(localPath, 'utf8');
            const newRemoteContent = syncSections(localContent, remoteContent, warnings, file.local);
            if (newRemoteContent === null) {
                continue;
            }
            if (newRemoteContent !== localContent) {
                // --- Seguridad: validar antes de escribir ---
                const sintaxisOk = validarSintaxis(newRemoteContent);
                console.log(`  Validación sintaxis: ${sintaxisOk ? 'OK' : 'ERROR'}`);

                const origin = 'https://fuchibolparatodos.netlify.app';
                const tnt = testCanal(newRemoteContent, 'TNT Sports', origin);
                const tntOk = tnt.ok && tnt.canalCount === 3;
                console.log(`  Validación pipeline (${origin}):`);
                if (tnt.ok) {
                    console.log(`    canales totales: ${tnt.canales}`);
                    console.log(`    '${tnt.canal}': ${tnt.canalCount} enlaces ${tntOk ? 'OK' : '(se esperaba 3)'}`);
                    const faltantes = verificarServidores(tnt.enlaces, repoRoot);
                    console.log(`    servidores faltantes: ${faltantes.length ? faltantes.join(', ') : 'ninguno'}`);
                    if (tnt.enlaces.length) {
                        tnt.enlaces.forEach((e, i) => console.log(`      [${i + 1}] ${e}`));
                    }
                } else {
                    console.log(`    ERROR al ejecutar pipeline: ${tnt.error}`);
                }

                if (!sintaxisOk || !tntOk || tnt.enlaces.some(e => verificarServidores([e], repoRoot).length)) {
                    console.log(`  ✖ CAMBIO DESCARTADO: el resultado no pasa las validaciones. Se mantiene el archivo local.`);
                    hasChanges = true; // hay novedades remotas, pero NO se aplicaron
                    warnings.push(`${file.local}: cambios remotos descartados por validación (sintaxis/TNT/servidores)`);
                    continue;
                }

                if (dryRun) {
                    console.log(`  CAMBIO DETECTADO -> ACTUALIZADO (dry-run, no se escribe)`);
                    hasChanges = true;
                    continue;
                }

                // Backup del archivo actual antes de escribir
                const backupPath = `${localPath}.backup`;
                fs.copyFileSync(localPath, backupPath);
                console.log(`  Backup creado: ${backupPath}`);

                fs.writeFileSync(localPath, newRemoteContent, 'utf8');
                console.log(`  CAMBIO DETECTADO -> ACTUALIZADO (secciones sincronizadas)`);
                hasChanges = true;
            } else {
                console.log(`  Sin cambios`);
            }
        }
    }

    // --- PASO 2: Extraer servidores del script-ch.js remoto y sincronizar ---
    if (remoteScriptChContent) {
        const serverFiles = extractServerFilenames(remoteScriptChContent);
        console.log(`\n========================================`);
        console.log(`[servidores HTML desde script-ch.js]`);
        console.log(`  Archivos encontrados: ${serverFiles.length}`);
        console.log(`========================================`);

        for (const filename of serverFiles) {
            const remotePath = `/servidores/${filename}`;
            const localPath = path.join(repoRoot, 'servidores', filename);
            console.log(`\n[servidor: ${filename}]`);
            const result = await syncFile(remotePath, localPath, filename, dryRun);
            if (result.changed) hasChanges = true;
            if (result.error) warnings.push(`servidores/${filename}: ${result.error}`);
        }

        // Servidores usados en runtime pero que el remoto no lista como literal
        // (p.ej. cvattpro_token.html, que solo aparece en base64 en el mapeo).
        for (const filename of SERVERS_ADICIONALES) {
            const remotePath = `/servidores/${filename}`;
            const localPath = path.join(repoRoot, 'servidores', filename);
            console.log(`\n[servidor adicional: ${filename}]`);
            const result = await syncFile(remotePath, localPath, filename, dryRun);
            if (result.changed) hasChanges = true;
            if (result.error) warnings.push(`servidores/${filename}: ${result.error}`);
        }
    } else {
        console.log(`\n[servidores HTML]`);
        console.log(`  ERROR: No hay contenido de script-ch.js para extraer servidores`);
        warnings.push(`servidores HTML: no se pudo extraer lista (script-ch.js no disponible)`);
    }

    // --- PASO 2.5: Normalizar asd.js (remoto 404 -> copia de cHV0by) ---
    // REESTRUCTURACION: la original ya no sirve /servidores/asd.js (404) y sus
    // páginas usan cHV0byBlbCBxdWUgcm9iYQ.js. Para que cualquier referencia vieja
    // a asd.js se comporte igual que la original, asd.js local pasa a ser una
    // copia byte-a-byte de cHV0byBlbCBxdWUgcm9iYQ.js (idempotente).
    if (!asdRemoteDisponible) {
        const asdPath = path.join(repoRoot, 'servidores', 'asd.js');
        const cHv0byPath = path.join(repoRoot, 'servidores', 'cHV0byBlbCBxdWUgcm9iYQ.js');
        if (fs.existsSync(asdPath) && fs.existsSync(cHv0byPath)) {
            const src = fs.readFileSync(cHv0byPath);
            const cur = fs.readFileSync(asdPath);
            console.log('\n[asd.js: normalización]');
            if (!src.equals(cur)) {
                console.log('  asd.js != cHV0byBlbCBxdWUgcm9iYQ.js -> se reemplaza (copia idéntica)');
                if (dryRun) {
                    console.log('  >>> CAMBIO (dry-run, no se escribe)');
                } else {
                    fs.copyFileSync(asdPath, asdPath + '.backup');
                    console.log('  Backup creado: ' + asdPath + '.backup');
                    fs.writeFileSync(asdPath, src);
                    console.log('  >>> asd.js ACTUALIZADO (copia de cHV0byBlbCBxdWUgcm9iYQ.js)');
                }
                hasChanges = true;
            } else {
                console.log('  Sin cambios (asd.js ya es copia de cHV0byBlbCBxdWUgcm9iYQ.js)');
            }
        }
    }

    // --- PASO 3: Sincronizar archivos auxiliares (CSS, JS) ---
    console.log(`\n========================================`);
    console.log(`[Archivos auxiliares]`);
    console.log(`========================================`);

    for (const aux of AUX_FILES) {
        console.log(`\n[${aux.label}]`);
        const localPath = path.join(repoRoot, aux.local);
        const result = await syncFile(aux.remote, localPath, aux.label, dryRun);
        if (result.changed) hasChanges = true;
        if (result.error) warnings.push(`${aux.local}: ${result.error}`);
    }

    // --- PASO 4: Resumen ---
    console.log('\n---');
    const modo = dryRun ? ' (modo dry-run: no se escribió nada)' : ' (modo normal)';
    if (hasChanges) {
        console.log(`Resumen: Se actualizaron archivos automaticamente${modo}.`);
        process.exit(0);
    } else if (warnings.length > 0) {
        console.log(`Resumen: Sin cambios automaticos. Advertencias${modo}:`);
        warnings.forEach(w => console.log(`  - ${w}`));
        process.exit(2);
    } else {
        console.log(`Todo actualizado. Sin cambios detectados${modo}.`);
        process.exit(0);
    }
}

module.exports = { extractChannelSets, extractServerFilenames, extractBalancedBlock, extractFilterBlock, extractMapeoServidores, syncSections, validarSintaxis, testCanal, verificarServidores, ejecutarPipeline, PATCHES };

if (require.main === module) {
    main().catch(e => {
        console.error('Error:', e);
        process.exit(1);
    });
}
