import './ChatExample.css'
import { ChatMessage } from './ChatMessage.js'

export function ChatExample(section, isPositive = false) {
  const chatExample = document.createElement('div')
  chatExample.className = 'chat-example'

  const title = document.createElement('h3')
  title.className = 'chat-example__title'
  title.textContent = section.title

  const chatContainer = document.createElement('div')
  chatContainer.className = 'chat-example__messages'

  // Create chat messages
  section.chat.messages.forEach((msg, index) => {
    // Map name to image file
    const avatarImage = msg.name === 'T.J Miller'
      ? '/img/T_J_Miller.png'
      : '/img/Thomas_Middleditch.png'

    chatContainer.appendChild(ChatMessage({
      name: msg.name,
      text: msg.text,
      avatar: avatarImage,
      time: msg.time
    }))
  })

  chatExample.appendChild(title)
  chatExample.appendChild(chatContainer)

  return chatExample
}
