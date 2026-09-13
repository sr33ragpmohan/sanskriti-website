// Injects server-rendered markup into dist/index.html so the page content,
// headings and hero image are in the HTML for search engines, social previews
// and a fast first paint. Runs after `vite build` and `vite build --ssr`
// (see the `build` script in package.json). Build time only — nothing is
// server-rendered at runtime; the deployed site is the static `dist/` folder.
import { existsSync } from 'node:fs'
import { readFile, writeFile, rm } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const templatePath = new URL('../dist/index.html', import.meta.url)
const serverEntry = new URL('../dist-ssr/entry-server.js', import.meta.url)

if (!existsSync(serverEntry)) {
  throw new Error(
    `Prerender needs ${fileURLToPath(serverEntry)}, produced by ` +
      '`vite build --ssr src/entry-server.tsx --outDir dist-ssr`. Run `npm run build` rather than `vite build` alone. ' +
      'If a Vite plugin (for example @cloudflare/vite-plugin added by automatic deploy configuration) changed the ' +
      'build output, remove it: this site deploys as static assets via wrangler.jsonc.',
  )
}

const template = await readFile(templatePath, 'utf8')
const { render } = await import(serverEntry.href)

if (!template.includes('<!--app-html-->')) {
  throw new Error('Prerender placeholder <!--app-html--> not found in dist/index.html')
}

await writeFile(templatePath, template.replace('<!--app-html-->', render()))
await rm(new URL('../dist-ssr', import.meta.url), { recursive: true, force: true })

console.log('Prerendered dist/index.html')
