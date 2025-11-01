import './ChatExample.css'
import { ChatMessage } from './ChatMessage.js'

export function ChatExample(section, isPositive = false) {
  const chatExample = document.createElement('div')
  chatExample.className = 'chat-example'

  const title = document.createElement('h3')
  title.className = isPositive
    ? 'chat-example__title chat-example__title--positive'
    : 'chat-example__title'
  title.textContent = section.title

  const chatContainer = document.createElement('div')
  chatContainer.className = 'chat-example__messages'

  // Create chat messages
  section.chat.messages.forEach((msg, index) => {
    const avatar = msg.name.charAt(0)
    chatContainer.appendChild(ChatMessage({
      name: msg.name,
      text: msg.text,
      avatar: avatar
    }))
  })

  chatExample.appendChild(title)
  chatExample.appendChild(chatContainer)

  return chatExample
}
