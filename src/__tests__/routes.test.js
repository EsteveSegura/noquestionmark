import { routes } from '../routes.js'
import { pages } from '../translations.js'

// ── Rule 10: page key in routes matches a key in translations ────────────────

describe('Rule 10 — Every route references an existing page key', () => {
  test.each(Object.entries(routes))('route "%s" → page "%s" exists in translations', (path, route) => {
    expect(pages).toHaveProperty(route.page)
  })
})

// ── Rule 2: Every page has exactly 3 routes (root, /en/, /es/) ───────────────

describe('Rule 2 — Every page has exactly 3 routes', () => {
  const routesByPage = {}
  Object.entries(routes).forEach(([path, route]) => {
    if (!routesByPage[route.page]) routesByPage[route.page] = []
    routesByPage[route.page].push(path)
  })

  test.each(Object.entries(routesByPage))('page "%s" has exactly 3 routes: %j', (page, paths) => {
    expect(paths).toHaveLength(3)
  })
})

// ── Rule 3: URL slug is the same for both languages ──────────────────────────

describe('Rule 3 — Slugs don\'t change between languages', () => {
  // Group routes by page key, then verify all share the same base slug
  const routesByPage = {}
  Object.entries(routes).forEach(([path, route]) => {
    if (!routesByPage[route.page]) routesByPage[route.page] = []
    routesByPage[route.page].push(path)
  })

  // Exclude home (its slugs are /, /en, /es — special case)
  const crimePages = Object.entries(routesByPage).filter(([page]) => page !== 'home')

  test.each(crimePages)('page "%s" uses the same slug across all language prefixes', (page, paths) => {
    const baseSlugs = paths.map(p => p.replace(/^\/(en|es)\//, '/'))
    const unique = [...new Set(baseSlugs)]
    // All 3 routes should resolve to the same base slug
    expect(unique).toHaveLength(1)
  })
})

// ── Rule 11: Crime pages use StandardView, home uses HomeView ────────────────

describe('Rule 11 — Correct view per page type', () => {
  test.each(Object.entries(routes))('route "%s" uses the correct view', (path, route) => {
    if (route.page === 'home') {
      expect(route.view.name).toBe('HomeView')
    } else {
      expect(route.view.name).toBe('StandardView')
    }
  })
})

// ── Rule 4: Every crime is listed on the home page in both languages ─────────

describe('Rule 4 — Every crime appears in home crimesList', () => {
  const crimePageKeys = Object.keys(pages).filter(k => k !== 'home')

  // Build a map: pageKey → base URL (the route without /en/ or /es/ prefix)
  const pageKeyToBaseUrl = {}
  Object.entries(routes).forEach(([path, route]) => {
    if (route.page === 'home') return
    // Pick the bare slug (no /en/ or /es/ prefix)
    if (!path.startsWith('/en/') && !path.startsWith('/es/')) {
      pageKeyToBaseUrl[route.page] = path
    }
  })

  test('all crimes are listed in home.en.crimesList', () => {
    const homeUrls = pages.home.en.crimesList.items.map(i => i.url)
    crimePageKeys.forEach(key => {
      expect(homeUrls).toContain(pageKeyToBaseUrl[key])
    })
  })

  test('all crimes are listed in home.es.crimesList', () => {
    const homeUrls = pages.home.es.crimesList.items.map(i => i.url)
    crimePageKeys.forEach(key => {
      expect(homeUrls).toContain(pageKeyToBaseUrl[key])
    })
  })

  test('home.en and home.es have the same URLs in the same order', () => {
    const enUrls = pages.home.en.crimesList.items.map(i => i.url)
    const esUrls = pages.home.es.crimesList.items.map(i => i.url)
    expect(enUrls).toEqual(esUrls)
  })
})

// ── Rule 5: Every crime URL is in ChatCrimesList urlToPageKey ────────────────

import fs from 'fs'
import path from 'path'

const chatCrimesListSource = fs.readFileSync(
  path.resolve(process.cwd(), 'src/components/ChatCrimesList/ChatCrimesList.js'),
  'utf-8'
)

describe('Rule 5 — Every crime has a urlToPageKey mapping', () => {

  const crimePageKeys = Object.keys(pages).filter(k => k !== 'home')

  // Build map of base URLs → page keys from routes
  const baseUrlToPage = {}
  Object.entries(routes).forEach(([routePath, route]) => {
    if (route.page === 'home') return
    if (!routePath.startsWith('/en/') && !routePath.startsWith('/es/')) {
      baseUrlToPage[routePath] = route.page
    }
  })

  test.each(Object.entries(baseUrlToPage))(
    'url "%s" → page "%s" is present in urlToPageKey',
    (url, pageKey) => {
      expect(chatCrimesListSource).toContain(`'${url}'`)
      expect(chatCrimesListSource).toContain(`'${pageKey}'`)
    }
  )
})
