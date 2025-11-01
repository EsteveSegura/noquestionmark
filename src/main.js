import './style.css'
import { Header } from './components/Header.js'
import { IntroText } from './components/IntroText.js'
import { translations, defaultLanguage } from './translations.js'
import { getCurrentLanguage } from './router.js'

function render() {
  const app = document.querySelector('#app')
  const lang = getCurrentLanguage()
  const t = translations[lang] || translations[defaultLanguage]

  // Clear app
  app.innerHTML = ''

  // Render components
  app.appendChild(Header(t))
  app.appendChild(IntroText(t))
}

// Initial render
render()

// Re-render on navigation
window.addEventListener('popstate', render)
