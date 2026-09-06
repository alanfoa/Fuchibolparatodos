// Servidor local de desarrollo.
// Replica el comportamiento de Netlify: si un archivo no existe pero existe
// su variante con .html, responde 301 redirigiendo a esa variante
// (pretty URLs). El sitio quita el .html de los enlaces en runtime
// (script-canalespro.js), por lo que sin esto el video local da 404.
//
// Uso: node scripts/dev-server.js  ->  http://127.0.0.1:5500

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5500;
const ROOT = path.resolve(__dirname, '..');

const MIME = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    let filePath = decodeURIComponent(url.pathname);
    if (filePath === '/') filePath = '/index.html';
    let abs = path.normalize(path.join(ROOT, filePath));

    // Previene path traversal fuera del repo
    if (!abs.startsWith(ROOT)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }

    const ext = path.extname(abs).toLowerCase();
    if (fs.existsSync(abs) && fs.statSync(abs).isDirectory()) {
        const idx = path.join(abs, 'index.html');
        if (fs.existsSync(idx)) abs = idx;
    }

    if (fs.existsSync(abs) && fs.statSync(abs).isFile()) {
        const data = fs.readFileSync(abs);
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
        res.end(data);
        return;
    }

    // Pretty URL de Netlify: /servidores/canalesparatodos -> /...html
    if (fs.existsSync(abs + '.html')) {
        res.writeHead(301, { Location: req.url.replace(/([^?]*)(\?.*)?$/, (m, p, q) => p + '.html' + (q || '')) });
        res.end();
        return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found: ' + req.url);
});

server.listen(PORT, '127.0.0.1', () => {
    console.log(`Dev server en http://127.0.0.1:${PORT}`);
});