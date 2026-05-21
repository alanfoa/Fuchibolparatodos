const https = require('https');
const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const BASE_URL = 'https://canalesonline.netlify.app';
const FILES = [
    {
        remote: '/servidores/asd.js',
        local: 'servidores/asd.js',
        autoUpdate: true,
        label: 'asd.js (canales, keys, DRM)'
    },
    {
        remote: '/js/script-ch.js',
        local: 'js/script-ch.js',
        autoUpdate: false,
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

        const remoteHash = sha256(remoteBuf);
        console.log(`  Hash remote: ${remoteHash}`);

        let localHash = 'no existe';
        if (fs.existsSync(localPath)) {
            localHash = sha256(fs.readFileSync(localPath));
        }
        console.log(`  Hash local:  ${localHash}`);

        if (remoteHash !== localHash) {
            console.log(`  CAMBIO DETECTADO`);
            if (file.autoUpdate) {
                fs.writeFileSync(localPath, remoteBuf);
                console.log(`  ACTUALIZADO: ${file.local}`);
                hasChanges = true;
            } else {
                console.log(`  ATENCION: ${file.local} cambi�. Requiere revisi�n manual.`);
                warnings.push(`${file.local}: cambi� en el origen, necesita revisi�n manual`);
            }
        } else {
            console.log(`  Sin cambios`);
        }
    }

    console.log('\n---');
    if (hasChanges) {
        console.log('Resumen: Se actualizaron archivos autom�ticamente.');
    } else if (warnings.length > 0) {
        console.log('Resumen: Sin cambios autom�ticos. Advertencias:');
        warnings.forEach(w => console.log(`  - ${w}`));
    } else {
        console.log('Todo actualizado. Sin cambios detectados.');
    }

    if (hasChanges) {
        process.exit(0);  // success with changes
    } else if (warnings.length > 0) {
        process.exit(2);  // warnings
    } else {
        process.exit(0);  // no changes
    }
}

main().catch(e => {
    console.error('Error:', e);
    process.exit(1);
});
