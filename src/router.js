import { defaultLanguage, supportedLanguages } from './translations.js'

export function getCurrentLanguage() {
  const path = window.location.pathname
  const langFromPath = path.split('/')[1]

  if (supportedLanguages.includes(langFromPath)) {
    return langFromPath
  }

  return defaultLanguage
}

export function navigateTo(lang) {
  if (!supportedLanguages.includes(lang)) {
    lang = defaultLanguage
  }

  window.history.pushState({}, '', `/${lang}`)
  window.dispatchEvent(new Event('popstate'))
}
