import { pages, supportedLanguages } from '../translations.js'

// Characters allowed per Rule 8 (docs/creating-new-pages.md)
const ALLOWED_CHARACTERS = ['T.J Miller', 'Thomas Middleditch', 'Monica Hall']

// Required keys per Rule 12
const CRIME_REQUIRED_KEYS = ['header', 'intro', 'dontDoThis', 'doThis', 'footer']

const pageKeys = Object.keys(pages)
const crimeKeys = pageKeys.filter(k => k !== 'home')

// Helper: returns a simplified "shape" of an object for structural comparison
function getShape(obj) {
  if (Array.isArray(obj)) {
    return { __type: 'array', length: obj.length }
  }
  if (obj && typeof obj === 'object') {
    const shape = {}
    Object.keys(obj).sort().forEach(k => {
      shape[k] = getShape(obj[k])
    })
    return shape
  }
  return typeof obj
}

// ── Rule 1: Every page must exist in both languages ──────────────────────────

describe('Rule 1 — Every page exists in both languages', () => {
  test.each(pageKeys)('"%s" has content in all supported languages', (key) => {
    supportedLanguages.forEach(lang => {
      expect(pages[key]).toHaveProperty(lang)
      expect(typeof pages[key][lang]).toBe('object')
    })
  })
})

// ── Rule 6: en and es must be structurally identical ─────────────────────────

describe('Rule 6 — en and es are structurally identical', () => {
  test.each(pageKeys)('"%s" has the same shape in en and es', (key) => {
    const enShape = getShape(pages[key].en)
    const esShape = getShape(pages[key].es)
    expect(enShape).toEqual(esShape)
  })
})

// ── Rule 9: Header animations must have exactly 6 items ──────────────────────

describe('Rule 9 — Exactly 6 header animations', () => {
  test.each(crimeKeys)('crime "%s" has exactly 6 animations in every language', (key) => {
    supportedLanguages.forEach(lang => {
      const animations = pages[key][lang].header.animations
      expect(animations).toHaveLength(6)
    })
  })
})

// ── Rule 12: Crime pages have exactly the required top-level keys ────────────

describe('Rule 12 — Crime pages have the required keys', () => {
  test.each(crimeKeys)('crime "%s" has header, intro, dontDoThis, doThis, footer', (key) => {
    supportedLanguages.forEach(lang => {
      CRIME_REQUIRED_KEYS.forEach(reqKey => {
        expect(pages[key][lang]).toHaveProperty(reqKey)
      })
    })
  })
})

// ── Rule 8: Only allowed characters in chat messages ─────────────────────────

describe('Rule 8 — Only allowed characters in messages', () => {
  test.each(crimeKeys)('crime "%s" only uses T.J Miller and Thomas Middleditch', (key) => {
    supportedLanguages.forEach(lang => {
      const t = pages[key][lang]
      const allMessages = [
        ...t.dontDoThis.chat.messages,
        ...t.doThis.chat.messages
      ]
      allMessages.forEach(msg => {
        expect(ALLOWED_CHARACTERS).toContain(msg.name)
      })
    })
  })
})

// ── Rule 7: Footer is identical across all pages (per language) ──────────────

describe('Rule 7 — Footer is identical across all pages', () => {
  test.each(supportedLanguages)('all pages share the same footer in "%s"', (lang) => {
    const footers = pageKeys.map(key => JSON.stringify(pages[key][lang].footer))
    const unique = [...new Set(footers)]
    expect(unique).toHaveLength(1)
  })
})

// ── Footer always has exactly 5 paragraphs ───────────────────────────────────

describe('Footer — exactly 5 paragraphs', () => {
  test.each(pageKeys)('"%s" has 5 footer paragraphs in every language', (key) => {
    supportedLanguages.forEach(lang => {
      expect(pages[key][lang].footer.paragraphs).toHaveLength(5)
    })
  })
})

// ── SEO: every page has seo.title and seo.description ────────────────────────

describe('SEO — title and description present', () => {
  test.each(pageKeys)('"%s" has seo.title and seo.description in every language', (key) => {
    supportedLanguages.forEach(lang => {
      const seo = pages[key][lang].seo
      expect(seo).toBeDefined()
      expect(seo.title).toBeTruthy()
      expect(seo.description).toBeTruthy()
    })
  })
})
