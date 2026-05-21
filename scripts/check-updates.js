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
// Maneja tanto ); como \n)\n; etc.
function extractChannelSets(content) {
    const blocks = [];
    let searchFrom = 0;

    while (searchFrom < content.length) {
        const start = content.indexOf('MisCanales.set(', searchFrom);
        if (start === -1) break;

        // Saltar bloques comentados: // MisCanales.set(...)
        const lineStart = content.lastIndexOf('\n', start - 1);
        const linePrefix = content.slice(lineStart + 1, start).trim();
        if (linePrefix.startsWith('//')) {
            searchFrom = start + 16;
            continue;
        }

        // Encontrar el cierre: ) con depth=0
        let depth = 0;
        let pos = start;
        let found = false;
        while (pos < content.length) {
            const ch = content[pos];
            if (ch === '(') depth++;
            else if (ch === ')') {
                depth--;
                if (depth === 0) {
                    // Incluir el ; si viene despues del )
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

async function main() {
    const repoRoot = path.resolve(__dirname, '..');
    let hasChanges = false;
    let warnings = [];

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
            // --- MODO REPLACE: reemplazar archivo completo ---
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
            // --- MODO MARKERS: extraer solo los MisCanales.set() del remoto y reemplazar la seccion entre marcadores ---
            const remoteContent = remoteBuf.toString('utf8');
            const localContent = fs.readFileSync(localPath, 'utf8');

            const channelBlocks = extractChannelSets(remoteContent);
            if (channelBlocks.length === 0) {
                console.log(`  ERROR: No se encontraron MisCanales.set() en el remoto`);
                warnings.push(`${file.local}: no se encontraron canales en el remoto`);
                continue;
            }

            const newChannels = channelBlocks.join('\n\n') + '\n';

            // Calcular hash de los canales para comparar
            const remoteChannelsHash = sha256(Buffer.from(newChannels));

            // Extraer la seccion actual entre marcadores
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

module.exports = { extractChannelSets };

if (require.main === module) {
    main().catch(e => {
        console.error('Error:', e);
        process.exit(1);
    });
}
