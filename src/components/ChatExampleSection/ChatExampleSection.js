import './ChatExampleSection.css'
import { ChatExample } from './ChatExample/ChatExample.js'
import { ExplanationText } from './ExplanationText/ExplanationText.js'

export function ChatExampleSection(t, sectionKey) {
  const section = document.createElement('section')
  section.className = 'chat-example-section'

  const container = document.createElement('div')
  container.className = 'chat-example-section__container'

  const leftColumn = document.createElement('div')
  leftColumn.className = 'chat-example-section__column'
  const isPositive = sectionKey === 'doThis'
  leftColumn.appendChild(ChatExample(t[sectionKey], isPositive))

  const rightColumn = document.createElement('div')
  rightColumn.className = 'chat-example-section__column'
  rightColumn.appendChild(ExplanationText(t[sectionKey], isPositive))

  container.appendChild(leftColumn)
  container.appendChild(rightColumn)
  section.appendChild(container)

  return section
}
