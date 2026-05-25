const https = require('https');
const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const BASE_URL = 'https://canalesonline.netlify.app';
const MARKER_START = '// ---- INICIO: CANALES AUTO-GENERADOS ----';
const MARKER_END = '// ---- FIN: CANALES AUTO-GENERADOS ----';

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

function fetch(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
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

// Descarga un archivo remoto y lo actualiza localmente si cambió
async function syncFile(remotePath, localPath, label) {
    const remoteUrl = BASE_URL + remotePath;
    console.log(`\n  Descargando: ${remoteUrl}`);

    let remoteBuf;
    try {
        remoteBuf = await fetch(remoteUrl);
    } catch (e) {
        console.log(`  ERROR: No se pudo descargar: ${e.message}`);
        return { changed: false, error: e.message };
    }

    const localExists = fs.existsSync(localPath);
    const remoteHash = sha256(remoteBuf);
    const localHash = localExists ? sha256(fs.readFileSync(localPath)) : 'no existe';

    console.log(`  Hash remote: ${remoteHash}`);
    console.log(`  Hash local:  ${localHash}`);

    if (!localExists || remoteHash !== localHash) {
        fs.mkdirSync(path.dirname(localPath), { recursive: true });
        fs.writeFileSync(localPath, remoteBuf);
        const action = localExists ? 'ACTUALIZADO' : 'CREADO (nuevo)';
        console.log(`  >>> ${action}`);
        return { changed: true };
    }

    console.log(`  Sin cambios`);
    return { changed: false };
}

async function main() {
    const repoRoot = path.resolve(__dirname, '..');
    let hasChanges = false;
    let warnings = [];
    let remoteScriptChContent = null;

    // --- PASO 1: Procesar archivos principales (asd.js y script-ch.js) ---
    for (const file of FILES) {
        const localPath = path.join(repoRoot, file.local);
        const remoteUrl = BASE_URL + file.remote;

        console.log(`\n[${file.label}]`);
        console.log(`  Descargando: ${remoteUrl}`);

        let remoteBuf;
        try {
            remoteBuf = await fetch(remoteUrl);
        } catch (e) {
            console.log(`  ERROR: No se pudo descargar: ${e.message}`);
            warnings.push(`${file.local}: no se pudo descargar (${e.message})`);
            continue;
        }

        if (file.mode === 'replace') {
            const localHash = fs.existsSync(localPath)
                ? sha256(fs.readFileSync(localPath))
                : 'no existe';
            const remoteHash = sha256(remoteBuf);

            console.log(`  Hash remote: ${remoteHash}`);
            console.log(`  Hash local:  ${localHash}`);

            if (remoteHash !== localHash) {
                console.log(`  CAMBIO DETECTADO -> ACTUALIZADO`);
                fs.writeFileSync(localPath, remoteBuf);
                hasChanges = true;
            } else {
                console.log(`  Sin cambios`);
            }
        } else if (file.mode === 'markers') {
            const remoteContent = remoteBuf.toString('utf8');
            remoteScriptChContent = remoteContent; // Guardar para extraer servidores
            const localContent = fs.readFileSync(localPath, 'utf8');

            const channelBlocks = extractChannelSets(remoteContent);
            if (channelBlocks.length === 0) {
                console.log(`  ERROR: No se encontraron MisCanales.set() en el remoto`);
                warnings.push(`${file.local}: no se encontraron canales en el remoto`);
                continue;
            }

            const newChannels = channelBlocks.join('\n\n') + '\n';
            const remoteChannelsHash = sha256(Buffer.from(newChannels));

            const startIdx = localContent.indexOf(MARKER_START);
            const endIdx = localContent.indexOf(MARKER_END);

            if (startIdx === -1 || endIdx === -1) {
                console.log(`  ERROR: No se encontraron los marcadores en el archivo local`);
                warnings.push(`${file.local}: faltan marcadores en el archivo local`);
                continue;
            }

            const beforeMarker = localContent.slice(0, startIdx + MARKER_START.length);
            const afterMarker = localContent.slice(endIdx);
            const currentSection = localContent.slice(startIdx + MARKER_START.length, endIdx);

            const currentHash = sha256(Buffer.from(currentSection));
            console.log(`  Canales remotos: ${channelBlocks.length}`);
            console.log(`  Hash canales remote: ${remoteChannelsHash}`);
            console.log(`  Hash canales local:  ${currentHash}`);

            if (remoteChannelsHash !== currentHash) {
                const newContent = beforeMarker + '\n' + newChannels + afterMarker;
                fs.writeFileSync(localPath, newContent, 'utf8');
                console.log(`  CAMBIO DETECTADO -> ACTUALIZADO (${channelBlocks.length} canales)`);
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
            const result = await syncFile(remotePath, localPath, filename);
            if (result.changed) hasChanges = true;
            if (result.error) warnings.push(`servidores/${filename}: ${result.error}`);
        }
    } else {
        console.log(`\n[servidores HTML]`);
        console.log(`  ERROR: No hay contenido de script-ch.js para extraer servidores`);
        warnings.push(`servidores HTML: no se pudo extraer lista (script-ch.js no disponible)`);
    }

    // --- PASO 3: Sincronizar archivos auxiliares (CSS, JS) ---
    console.log(`\n========================================`);
    console.log(`[Archivos auxiliares]`);
    console.log(`========================================`);

    for (const aux of AUX_FILES) {
        console.log(`\n[${aux.label}]`);
        const localPath = path.join(repoRoot, aux.local);
        const result = await syncFile(aux.remote, localPath, aux.label);
        if (result.changed) hasChanges = true;
        if (result.error) warnings.push(`${aux.local}: ${result.error}`);
    }

    // --- PASO 4: Resumen ---
    console.log('\n---');
    if (hasChanges) {
        console.log('Resumen: Se actualizaron archivos automaticamente.');
        process.exit(0);
    } else if (warnings.length > 0) {
        console.log('Resumen: Sin cambios automaticos. Advertencias:');
        warnings.forEach(w => console.log(`  - ${w}`));
        process.exit(2);
    } else {
        console.log('Todo actualizado. Sin cambios detectados.');
        process.exit(0);
    }
}

module.exports = { extractChannelSets, extractServerFilenames };

if (require.main === module) {
    main().catch(e => {
        console.error('Error:', e);
        process.exit(1);
    });
}
