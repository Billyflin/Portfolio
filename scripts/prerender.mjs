import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { render } from '../dist-ssr/entry-server.js';

const pages = [
  ['dist/index.html', 'en', 'portfolio'],
  ['dist/es/index.html', 'es', 'portfolio'],
  ['dist/plain/index.html', 'en', 'plain'],
  ['dist/es/plain/index.html', 'es', 'plain'],
];

for (const [file, locale, page] of pages) {
  const target = resolve(file);
  const html = await readFile(target, 'utf8');
  const marker = '<!--app-html-->';
  if (!html.includes(marker)) throw new Error(`Missing prerender marker in ${file}`);
  await writeFile(target, html.replace(marker, render(locale, page)), 'utf8');
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
