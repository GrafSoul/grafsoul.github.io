/**
 * Generates EN/RU CV PDFs from the production build in docs/.
 *
 * Renders the page in headless Google Chrome as a single tall PDF page
 * (same format as the originals) and writes the files to src/assets/pdf/.
 *
 * Usage: npm run build && npm run pdf
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DOCS_DIR = path.join(ROOT, 'docs');
const OUT_DIR = path.join(ROOT, 'src', 'assets', 'pdf');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PAGE_WIDTH_PX = 1035; // matches the original PDF width
const PORT = 8765;

const MIME = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.pdf': 'application/pdf',
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Minimal static file server for docs/ — avoids Vite live-reload and file:// CORS issues. */
function serveDocs() {
    const server = http.createServer((req, res) => {
        const urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname);
        let filePath = path.join(DOCS_DIR, urlPath === '/' ? 'index.html' : urlPath);
        if (!filePath.startsWith(DOCS_DIR) || !fs.existsSync(filePath)) {
            res.writeHead(404).end('not found');
            return;
        }
        res.writeHead(200, {
            'Content-Type': MIME[path.extname(filePath)] || 'application/octet-stream',
        });
        fs.createReadStream(filePath).pipe(res);
    });
    return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

async function renderPdf(page, file) {
    await page.addStyleTag({
        content: [
            // hide UI controls that make no sense in a PDF
            '.lang-container, .mobile-menu-toggle { display: none !important; }',
            // FOUC-prevention keeps html hidden until the "ready" class is set
            'html { visibility: visible !important; opacity: 1 !important; }',
            // uniform paper-coloured frame around the card in the PDF only
            // (padding, not margin — a wrapper margin would collapse through body)
            'body { padding: 30px !important; }',
        ].join('\n'),
    });
    await page.evaluate(() => document.documentElement.classList.add('ready'));
    const height = await page.evaluate(() => document.body.scrollHeight);
    await page.pdf({
        path: file,
        printBackground: true,
        width: `${PAGE_WIDTH_PX}px`,
        height: `${height + 2}px`,
        pageRanges: '1',
        margin: { top: 0, bottom: 0, left: 0, right: 0 },
    });
    console.log(`written ${file} (${PAGE_WIDTH_PX}x${height}px)`);
}

const server = await serveDocs();
const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' });

try {
    const page = await browser.newPage();
    await page.setViewport({ width: PAGE_WIDTH_PX, height: 1200 });
    await page.emulateMediaType('screen');
    await page.goto(`http://localhost:${PORT}/index.html`, { waitUntil: 'networkidle0' });
    await sleep(1000); // let fonts/icons settle

    // EN is the default language
    await renderPdf(page, path.join(OUT_DIR, 'dmitriy_zatulovskiy_cv_en.pdf'));

    // force RU directly via styles — no fade animation, deterministic
    const ruVisible = await page.evaluate(() => {
        document.querySelectorAll('.en').forEach((el) => {
            el.style.setProperty('display', 'none', 'important');
        });
        document.querySelectorAll('.ru').forEach((el) => {
            el.style.setProperty('display', 'block', 'important');
            el.style.opacity = '1';
        });
        const h2 = document.querySelector('h2.section-title.ru');
        return h2 && getComputedStyle(h2).display === 'block';
    });
    if (!ruVisible) throw new Error('RU content did not become visible');
    await sleep(300);
    await renderPdf(page, path.join(OUT_DIR, 'dmitriy_zatulovskiy_cv_ru.pdf'));
} finally {
    await browser.close();
    server.close();
}
