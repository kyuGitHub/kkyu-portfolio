// Fails if outdated numbers from the old site reappear in built pages.
// Usage: node scripts/check-facts.mjs
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
const banned = ['1,500억', '150×', '150배', '60억', '17년', '2→40', '40명+', '4 Members', '14Y'];
const walk = d => readdirSync(d).flatMap(f => { const p = join(d, f); return statSync(p).isDirectory() ? (['node_modules', '.git', 'src', 'scripts'].includes(f) ? [] : walk(p)) : p.endsWith('.html') ? [p] : []; });
let bad = 0;
for (const f of walk('.')) {
  const s = readFileSync(f, 'utf8');
  for (const b of banned) if (s.includes(b)) { console.log(`${f}: "${b}"`); bad++; }
}
console.log(bad ? `${bad} outdated value(s) found` : 'facts OK');
process.exit(bad ? 1 : 0);
