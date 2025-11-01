import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { JSDOM } from 'jsdom'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distPath = path.resolve(__dirname, '../dist')
const srcPath = path.resolve(__dirname, '../src')

// Read the generated index.html template
const indexHtmlTemplate = fs.readFileSync(path.join(distPath, 'index.html'), 'utf-8')

// Import modules for rendering
const { App } = await import(path.join('file://', srcPath, 'components/App/App.js'))
const { translations, defaultLanguage } = await import(path.join('file://', srcPath, 'translations.js'))

// Function to render content
function renderContent(lang) {
  const dom = new JSDOM('<!DOCTYPE html><html><body><div id="app"></div></body></html>')

  // Mark that we're in SSR mode
  global.__SSR__ = true
  global.document = dom.window.document
  global.window = dom.window

  const t = translations[lang] || translations[defaultLanguage]
  const app = dom.window.document.querySelector('#app')

  // Render app
  try {
    app.appendChild(App(t))
  } catch (error) {
    console.warn(`Warning rendering ${lang}:`, error.message)
  }

  // Clean up SSR flag
  delete global.__SSR__

  return app.innerHTML
}

// Create directories and files for each language
const languages = ['en', 'es']

languages.forEach(lang => {
  const langDir = path.join(distPath, lang)

  // Create directory if it doesn't exist
  if (!fs.existsSync(langDir)) {
    fs.mkdirSync(langDir, { recursive: true })
  }

  // Render content
  const content = renderContent(lang)

  // Insert content into the template
  const htmlWithContent = indexHtmlTemplate.replace(
    '<div id="app"></div>',
    `<div id="app">${content}</div>`
  )

  // Write file
  fs.writeFileSync(path.join(langDir, 'index.html'), htmlWithContent, 'utf-8')

  console.log(`✓ Generated /${lang}/index.html with content`)
})

// Also generate the root index.html with English content
const rootContent = renderContent('en')
const rootHtmlWithContent = indexHtmlTemplate.replace(
  '<div id="app"></div>',
  `<div id="app">${rootContent}</div>`
)
fs.writeFileSync(path.join(distPath, 'index.html'), rootHtmlWithContent, 'utf-8')
console.log('✓ Generated /index.html with content')

console.log('✓ Pre-rendering complete!')
