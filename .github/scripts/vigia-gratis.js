const base = 'https://fuchibolparatodos.netlify.app';

const MARKERS = [
    'Bienvenido a Canales',
    '8.000',
    'Pega el c\u00f3digo',
    'FECHA_VALIDACION',
    'bloqueoUS',
    'canalesonline24@',
    'Alias para donaciones',
    'MAX_PAGE_RELOADS',
];

const archivos = [
    '/index.html',
    '/js/script-config.js',
    '/js/script-canalespro.js',
    '/servidores/cvattpro_token.html?get=VE5UX1Nwb3J0c19IRA',
    '/servidores/canalesparatodos_ext.html?get=VE5UX1Nwb3J0c19IRA',
    '/servidores/canalesparatodos.html?get=VE5UX1Nwb3J0c19IRA',
];

(async () => {
    let problemas = 0;

    for (const u of archivos) {
        const r = await fetch(base + u, { signal: AbortSignal.timeout(20000) });
        if (r.status !== 200) {
            console.log(`  [${r.status}] ${u}`);
            problemas++;
            continue;
        }
        const t = await r.text();
        const encontrados = MARKERS.filter(m => t.includes(m));
        if (encontrados.length) {
            console.log(`  PAYWALL/GUARD en ${u}: ${encontrados.join(', ')}`);
            problemas++;
        } else {
            console.log(`  gratis OK (${u})`);
        }
    }

    // Sanidad de las opciones de TNT: la opcion 2 debe cargar el player real.
    const op2 = await (await fetch(base + '/servidores/canalesparatodos_ext.html?get=VE5UX1Nwb3J0c19IRA')).text();
    if (op2.includes('cHV0byBlbCBxdWUgcm9iYQ.js') && op2.includes('initializePlayer()')) {
        console.log('  opcion 2: carga cHV0by/retry OK');
    } else {
        console.log('  opcion 2: NO carga cHV0by/retry (posible regresion)');
        problemas++;
    }

    if (problemas) {
        console.log(`RESULTADO: FALLO (${problemas} problema(s)). Revisar el sitio.`);
        process.exit(1);
    }
    console.log('RESULTADO: OK. La pagina sigue gratis y las opciones sanas.');
})();