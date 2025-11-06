import './Footer.css'

// Helper function to build language-aware URLs
function buildLangUrl(lang) {
  const isSSR = typeof window === 'undefined' || (typeof global !== 'undefined' && global.__SSR__)

  // Get current path
  let path
  if (isSSR) {
    // In SSR, get path from global variable
    path = global.__CURRENT_ROUTE__ || '/'
  } else {
    // In browser, get from window.location
    path = window.location.pathname
  }

  // Normalize: remove trailing slash except for root
  if (path !== '/' && path.endsWith('/')) {
    path = path.slice(0, -1)
  }

  // If path is just root, return /{lang}
  if (path === '/') {
    return `/${lang}`
  }

  // If path starts with /en or /es, replace it
  if (path.startsWith('/en')) {
    return path.replace(/^\/en/, `/${lang}`)
  }
  if (path.startsWith('/es')) {
    return path.replace(/^\/es/, `/${lang}`)
  }

  // Otherwise, prepend the language
  return `/${lang}${path}`
}

export function Footer(t) {
  const footer = document.createElement('footer')
  footer.className = 'footer'

  // Process paragraphs and replace language links dynamically
  const processedParagraphs = t.footer.paragraphs.map(p => {
    // Check if this paragraph contains language links
    if (p.includes('This site is available in') || p.includes('Este sitio está disponible en')) {
      // Generate dynamic language links
      const enUrl = buildLangUrl('en')
      const esUrl = buildLangUrl('es')

      // Replace with dynamic URLs
      if (p.includes('This site is available in')) {
        return `This site is available in: <a href="${enUrl}">English</a>, <a href="${esUrl}">Español</a>`
      } else {
        return `Este sitio está disponible en: <a href="${enUrl}">English</a>, <a href="${esUrl}">Español</a>`
      }
    }
    return p
  })

  footer.innerHTML = processedParagraphs.map(p => `<p>${p}</p>`).join('')

  return footer
}
