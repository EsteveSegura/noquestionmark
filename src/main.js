import './style.css'
import { routes } from './routes.js'
import { pages, defaultLanguage } from './translations.js'
import { getCurrentLanguage } from './router.js'

function render() {
  const path = window.location.pathname
  const route = routes[path] || routes['/']
  const lang = getCurrentLanguage()
  const t = pages[route.page][lang] || pages[route.page][defaultLanguage]

  const app = document.querySelector('#app')
  app.innerHTML = ''
  app.appendChild(route.view(t))
}

// Initial render
render()

// Re-render on navigation
window.addEventListener('popstate', render)
