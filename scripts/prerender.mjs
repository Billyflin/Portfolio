import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { render } from '../dist-ssr/entry-server.js';

const pages = [
  ['dist/index.html', 'en', 'portfolio'],
  ['dist/es/index.html', 'es', 'portfolio'],
  ['dist/plain/index.html', 'en', 'plain'],
  ['dist/es/plain/index.html', 'es', 'plain'],
  ['dist/404.html', 'en', 'notFound'],
];
const clientAssets = new Set();

for (const [file, locale, page] of pages) {
  const target = resolve(file);
  const html = await readFile(target, 'utf8');
  const marker = '<!--app-html-->';
  if (!html.includes(marker)) throw new Error(`Missing prerender marker in ${file}`);
  const clientEntry = /\s*<script type="module" crossorigin src="(\/assets\/main-[^"]+\.js)"><\/script>/;
  const clientEntryMatch = html.match(clientEntry);
  if (!clientEntryMatch) throw new Error(`Missing client entry in ${file}`);
  clientAssets.add(clientEntryMatch[1]);

  // Every page is fully rendered HTML and has no client-side interactions.
  // Removing the React entry avoids shipping and hydrating an unnecessary bundle.
  const prerendered = html
    .replace(marker, render(locale, page))
    .replace(clientEntry, '');
  await writeFile(target, prerendered, 'utf8');
}

for (const asset of clientAssets) {
  await rm(resolve('dist', asset.replace(/^\//, '')), { force: true });
}

const workerDir = resolve('dist/server');
await mkdir(workerDir, { recursive: true });
await writeFile(
  resolve(workerDir, 'index.js'),
  `export default {
  async fetch(request, env) {
    if (!env.ASSETS) return new Response('Static asset binding unavailable', { status: 500 });
    return env.ASSETS.fetch(request);
  },
};
`,
  'utf8',
);

await rm(resolve('dist-ssr'), { recursive: true, force: true });
