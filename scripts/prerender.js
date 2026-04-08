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

const BASE_URL = process.env.VITE_BASE_URL || 'https://chatcrimes.com'
const TODAY = new Date().toISOString().split('T')[0]

// Helper function to extract language from path
function getLangFromPath(routePath) {
  if (routePath === '/') return 'en'
  if (routePath.startsWith('/en')) return 'en'
  if (routePath.startsWith('/es')) return 'es'
  return defaultLanguage
}

// Get the base slug without language prefix
function getBaseSlug(routePath) {
  if (routePath === '/' || routePath === '/en' || routePath === '/es') return ''
  return routePath.replace(/^\/(en|es)\//, '/')
}

// Build hreflang mapping: baseSlug -> { en: fullPath, es: fullPath, default: fullPath }
function buildHreflangMap() {
  const map = {}
  Object.keys(routes).forEach(routePath => {
    const baseSlug = getBaseSlug(routePath)
    const lang = getLangFromPath(routePath)
    if (!map[baseSlug]) map[baseSlug] = {}

    if (routePath === '/' || routePath === baseSlug) {
      map[baseSlug]['x-default'] = routePath
    }
    map[baseSlug][lang] = routePath
  })
  return map
}

const hreflangMap = buildHreflangMap()

// Generate SEO meta tags for a route
function generateSeoHead(routePath, route) {
  const lang = getLangFromPath(routePath)
  const t = pages[route.page][lang] || pages[route.page][defaultLanguage]
  const seo = t.seo || {}

  const titleRaw = seo.title || t.header?.title || 'ChatCrimes'
  const description = seo.description || ''
  // HTML-escape quotes for use in attributes
  const escapeAttr = (str) => str.replace(/"/g, '&quot;')
  const title = titleRaw
  const titleAttr = escapeAttr(titleRaw)
  const descriptionAttr = escapeAttr(description)
  const canonicalSlug = seo.slug !== undefined ? seo.slug : routePath.replace(/^\/(en|es)\/?/, '')
  const canonicalUrl = canonicalSlug ? `${BASE_URL}/${canonicalSlug}` : BASE_URL
  const pageUrl = routePath === '/' ? BASE_URL : `${BASE_URL}${routePath}`

  let tags = []

  // Meta description
  if (description) {
    tags.push(`<meta name="description" content="${descriptionAttr}">`)
  }

  // Canonical
  tags.push(`<link rel="canonical" href="${canonicalUrl}">`)

  // hreflang tags
  const baseSlug = getBaseSlug(routePath)
  const hreflangs = hreflangMap[baseSlug] || {}
  Object.entries(hreflangs).forEach(([hrefLang, hrefPath]) => {
    const hrefUrl = hrefPath === '/' ? BASE_URL : `${BASE_URL}${hrefPath}`
    tags.push(`<link rel="alternate" hreflang="${hrefLang}" href="${hrefUrl}">`)
  })

  // Open Graph
  tags.push(`<meta property="og:title" content="${titleAttr}">`)
  if (description) {
    tags.push(`<meta property="og:description" content="${descriptionAttr}">`)
  }
  tags.push(`<meta property="og:url" content="${pageUrl}">`)
  tags.push(`<meta property="og:type" content="website">`)
  tags.push(`<meta property="og:site_name" content="ChatCrimes">`)
  // TODO: Uncomment when og-image.png is created in public/img/ (1200x630px recommended)
  // tags.push(`<meta property="og:image" content="${BASE_URL}/img/og-image.png">`)

  // Twitter Cards
  tags.push(`<meta name="twitter:card" content="summary_large_image">`)
  tags.push(`<meta name="twitter:title" content="${titleAttr}">`)
  if (description) {
    tags.push(`<meta name="twitter:description" content="${descriptionAttr}">`)
  }
  // TODO: Uncomment when og-image.png is created in public/img/ (1200x630px recommended)
  // tags.push(`<meta name="twitter:image" content="${BASE_URL}/img/og-image.png">`)

  // Schema.org structured data
  let schema
  if (route.page === 'home') {
    schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "ChatCrimes",
      "url": BASE_URL,
      "description": description,
      "author": {
        "@type": "Person",
        "name": "Esteve Segura",
        "url": "https://girlazo.com"
      }
    }
  } else {
    schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title,
      "description": description,
      "url": pageUrl,
      "author": {
        "@type": "Person",
        "name": "Esteve Segura",
        "url": "https://girlazo.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "ChatCrimes",
        "url": BASE_URL
      }
    }
  }
  tags.push(`<script type="application/ld+json">${JSON.stringify(schema)}</script>`)

  return { title, tags }
}

// Function to render content for a specific route
function renderContent(routePath, route) {
  const dom = new JSDOM('<!DOCTYPE html><html><body><div id="app"></div></body></html>')

  // Mark that we're in SSR mode
  global.__SSR__ = true
  global.__CURRENT_ROUTE__ = routePath
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

  const lang = getLangFromPath(routePath)

  // Generate SEO head tags
  const { title, tags } = generateSeoHead(routePath, route)

  // Render content
  const content = renderContent(routePath, route)

  // Insert content and title into the template
  let htmlWithContent = indexHtmlTemplate.replace(
    '<div id="app"></div>',
    `<div id="app">${content}</div>`
  )

  // Replace title
  htmlWithContent = htmlWithContent.replace(
    /<title>.*<\/title>/,
    `<title>${title}</title>`
  )

  // Fix lang attribute for Spanish pages
  if (lang === 'es') {
    htmlWithContent = htmlWithContent.replace(
      '<html lang="en">',
      '<html lang="es">'
    )
  }

  // Insert SEO meta tags before closing </head>
  const seoTagsBlock = '\n    ' + tags.join('\n    ') + '\n  '
  htmlWithContent = htmlWithContent.replace('</head>', `${seoTagsBlock}</head>`)

  // Write file
  fs.writeFileSync(fullPath, htmlWithContent, 'utf-8')

  console.log(`✓ Generated ${routePath} -> ${outputPath}`)
})

// Generate sitemap.xml with lastmod
function generateSitemap() {
  const urls = Object.keys(routes).map(routePath => {
    const url = routePath === '/' ? BASE_URL : `${BASE_URL}${routePath}`
    const priority = routePath === '/' || routePath === '/en' || routePath === '/es' ? '1.0' : '0.8'

    return `  <url>
    <loc>${url}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`
  }).join('\n')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

  const sitemapPath = path.join(distPath, 'sitemap.xml')
  fs.writeFileSync(sitemapPath, sitemap, 'utf-8')
  console.log('✓ Generated sitemap.xml with lastmod')
}

generateSitemap()

console.log('✓ Pre-rendering complete!')
