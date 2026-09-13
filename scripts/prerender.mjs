// Injects server-rendered markup into dist/index.html so the page content,
// headings and hero image are in the HTML for search engines, social previews
// and a fast first paint. Runs after `vite build` and `vite build --ssr`.
import { readFile, writeFile, rm } from 'node:fs/promises'

const templatePath = new URL('../dist/index.html', import.meta.url)
const serverEntry = new URL('../dist-ssr/entry-server.js', import.meta.url)

const template = await readFile(templatePath, 'utf8')
const { render } = await import(serverEntry.href)

if (!template.includes('<!--app-html-->')) {
  throw new Error('Prerender placeholder <!--app-html--> not found in dist/index.html')
}

await writeFile(templatePath, template.replace('<!--app-html-->', render()))
await rm(new URL('../dist-ssr', import.meta.url), { recursive: true, force: true })

console.log('Prerendered dist/index.html')
