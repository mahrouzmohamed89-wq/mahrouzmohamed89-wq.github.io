import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const data = JSON.parse(readFileSync(join(root, 'api/projects/pixelapp.json'), 'utf8'))
const htmlPath = join(root, 'projects/pixelapp/index.html')

let html = readFileSync(htmlPath, 'utf8')
const re = /(<script id="project-data" type="application\/json">)[\s\S]*?(<\/script>)/
if (!re.test(html)) {
  console.error('project-data block not found in projects/pixelapp/index.html')
  process.exit(1)
}

html = html.replace(re, '$1' + JSON.stringify(data.project) + '$2')
writeFileSync(htmlPath, html)
console.log('Synced project-data into projects/pixelapp/index.html')
