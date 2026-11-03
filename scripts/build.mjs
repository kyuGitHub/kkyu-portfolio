// Builds the static pages from src/pages/*.mjs into the repo root.
// Usage: node scripts/build.mjs   (no dependencies; output HTML is committed, Vercel serves it as-is)
import { writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { layout } from './lib.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dir = join(root, 'src/pages');
let n = 0;
for (const f of readdirSync(dir).filter(f => f.endsWith('.mjs')).sort()) {
  const mod = await import(pathToFileURL(join(dir, f)).href);
  for (const p of [].concat(mod.default)) {
    const out = join(root, p.path);
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, layout(p));
    n++;
    console.log('built', p.path);
  }
}
console.log(n + ' pages');
