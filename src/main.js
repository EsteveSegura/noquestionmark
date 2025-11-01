import './style.css'
import { App } from './components/App/App.js'
import { translations, defaultLanguage } from './translations.js'
import { getCurrentLanguage } from './router.js'

function render() {
  const app = document.querySelector('#app')
  const lang = getCurrentLanguage()
  const t = translations[lang] || translations[defaultLanguage]

  // Clear app
  app.innerHTML = ''

  // Render app
  app.appendChild(App(t))
}

// Initial render
render()

// Re-render on navigation
window.addEventListener('popstate', render)
