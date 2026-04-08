import './ChatCrimesList.css'
import { ChatExample } from '../ChatExampleSection/ChatExample/ChatExample.js'
import { pages } from '../../translations.js'
import { getCurrentLanguage } from '../../router.js'

// Map URL paths to page keys in translations
const urlToPageKey = {
  '/no-question-mark': 'noquestionmark',
  '/no-channel-only': 'nochannelonly',
  '/no-public-shaming': 'nopublicshaming',
  '/no-reaction-as-answer': 'noreactionasanswer',
  '/use-the-thread': 'usethethread',
  '/no-hello': 'nohello',
  '/no-message-splitting': 'nomessagesplitting',
  '/just-ask': 'justask',
  '/no-unnecessary-mentions': 'nounnecessarymentions'
}

function createCard(pageTranslations, url) {
  const card = document.createElement('a')
  card.href = url
  card.className = 'chat-crime-card'

  const cardTitle = document.createElement('h3')
  cardTitle.className = 'chat-crime-card__title'
  cardTitle.textContent = pageTranslations.header.title
  card.appendChild(cardTitle)

  const chatWrapper = document.createElement('div')
  chatWrapper.className = 'chat-crime-card__chat'

  const chatExample = ChatExample(pageTranslations.dontDoThis, false)
  const chatTitle = chatExample.querySelector('.chat-example__title')
  if (chatTitle) chatTitle.remove()

  chatWrapper.appendChild(chatExample)
  card.appendChild(chatWrapper)

  return card
}

function getColumnCount() {
  if (typeof window === 'undefined') return 3
  if (window.innerWidth <= 640) return 1
  if (window.innerWidth <= 1024) return 2
  return 3
}

function distributeMasonry(grid, cards, columnCount) {
  grid.innerHTML = ''

  // Create columns
  const columns = []
  const columnHeights = []

  for (let i = 0; i < columnCount; i++) {
    const column = document.createElement('div')
    column.className = 'chat-crimes-column'
    columns.push(column)
    columnHeights.push(0)
    grid.appendChild(column)
  }

  // Distribute cards to shortest column
  cards.forEach(card => {
    const shortestIndex = columnHeights.indexOf(Math.min(...columnHeights))
    const clonedCard = card.cloneNode(true)
    columns[shortestIndex].appendChild(clonedCard)
    // Estimate height based on content (messages count * approx height)
    const messagesCount = clonedCard.querySelectorAll('.chat-message').length
    columnHeights[shortestIndex] += 100 + (messagesCount * 80)
  })
}

export function ChatCrimesList(t) {
  const section = document.createElement('section')
  section.className = 'chat-crimes-list'

  const grid = document.createElement('div')
  grid.className = 'chat-crimes-grid'

  const lang = getCurrentLanguage()
  const cards = []

  t.crimesList.items.forEach(item => {
    const pageKey = urlToPageKey[item.url]
    if (!pageKey || !pages[pageKey]) return

    const pageTranslations = pages[pageKey][lang]
    if (!pageTranslations || !pageTranslations.dontDoThis) return

    cards.push(createCard(pageTranslations, item.url))
  })

  // Initial distribution
  distributeMasonry(grid, cards, getColumnCount())

  // Re-distribute on resize (client-side only)
  if (typeof window !== 'undefined') {
    let resizeTimeout
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        distributeMasonry(grid, cards, getColumnCount())
      }, 100)
    })
  }

  section.appendChild(grid)

  return section
}
