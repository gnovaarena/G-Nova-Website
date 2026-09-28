import { readFile, writeFile, readdir } from 'node:fs/promises';

// Ship ordinary static HTML, with a single source for shared site components.
const root = new URL('../', import.meta.url);
const head = (await readFile(new URL('components/head.html', root), 'utf8')).trim();
const header = (await readFile(new URL('components/header.html', root), 'utf8')).trim();
const footer = (await readFile(new URL('components/footer.html', root), 'utf8')).trim();
const checkOnly = process.argv.includes('--check');
const pages = (await readdir(root)).filter(name => name.endsWith('.html'));
for (const name of pages) {
  const path = new URL(name, root);
  const original = await readFile(path, 'utf8');
  const active = html => html.replaceAll(`href="${name}"`, `href="${name}" aria-current="page"`);
  const homeHeader = name === 'index.html' ? active(header).replaceAll('href="index.html"', 'href="#home"') : active(header);
  const blocks = [
    ['head', head, /<!-- site:head -->[\s\S]*?<!-- \/site:head -->/],
    ['header', homeHeader, /<nav\b[\s\S]*?<\/nav>/],
    ['footer', active(footer), /<footer\b[\s\S]*?<\/footer>/],
  ];
  let next = original;
  for (const [component, html, legacy] of blocks) {
    const marker = new RegExp(`<!-- site:${component} -->[\\s\\S]*?<!-- /site:${component} -->`);
    const pattern = marker.test(next) ? marker : legacy;
    if (!pattern.test(next)) throw new Error(`${name}: missing ${component} component`);
    next = next.replace(pattern, `<!-- site:${component} -->\n${html}\n<!-- /site:${component} -->`);
  }
  if (next !== original) {
    if (checkOnly) throw new Error(`${name}: shared layout differs; run pnpm run sync:layout`);
    await writeFile(path, next);
  }
}
console.log(`Shared head, navigation, and footer ${checkOnly ? 'verified' : 'synced'} across ${pages.length} pages.`);
