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
const routesModule = await import(path.join('file://', srcPath, 'routes.js'))
const translationsModule = await import(path.join('file://', srcPath, 'translations.js'))

const routes = routesModule.routes
const pages = translationsModule.pages
const defaultLanguage = translationsModule.defaultLanguage

// Helper function to extract language from path
function getLangFromPath(routePath) {
  if (routePath === '/') return 'en'
  if (routePath.startsWith('/en')) return 'en'
  if (routePath.startsWith('/es')) return 'es'
  return defaultLanguage
}

// Function to render content for a specific route
function renderContent(routePath, route) {
  const dom = new JSDOM('<!DOCTYPE html><html><body><div id="app"></div></body></html>')

  // Mark that we're in SSR mode
  global.__SSR__ = true
  global.__CURRENT_ROUTE__ = routePath  // Store current route for SSR
  global.document = dom.window.document
  global.window = dom.window

  const lang = getLangFromPath(routePath)
  const t = pages[route.page][lang] || pages[route.page][defaultLanguage]
  const app = dom.window.document.querySelector('#app')

  // Render view
  try {
    app.appendChild(route.view(t))
  } catch (error) {
    console.warn(`Warning rendering ${routePath}:`, error.message)
  }

  // Clean up SSR flags
  delete global.__SSR__
  delete global.__CURRENT_ROUTE__

  return app.innerHTML
}

// Generate HTML for each route
Object.entries(routes).forEach(([routePath, route]) => {
  const outputPath = routePath === '/' ? 'index.html' : path.join(routePath, 'index.html')
  const fullPath = path.join(distPath, outputPath)
  const dirPath = path.dirname(fullPath)

  // Create directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }

  // Render content
  const content = renderContent(routePath, route)

  // Insert content into the template
  const htmlWithContent = indexHtmlTemplate.replace(
    '<div id="app"></div>',
    `<div id="app">${content}</div>`
  )

  // Write file
  fs.writeFileSync(fullPath, htmlWithContent, 'utf-8')

  console.log(`✓ Generated ${routePath} -> ${outputPath}`)
})

console.log('✓ Pre-rendering complete!')
