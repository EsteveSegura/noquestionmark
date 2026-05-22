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
    const avatarMap = {
      'T.J Miller': '/img/T_J_Miller.png',
      'Thomas Middleditch': '/img/Thomas_Middleditch.png',
      'Monica Hall': '/img/Monica_Hall.png'
    }
    const avatarImage = avatarMap[msg.name] || '/img/Thomas_Middleditch.png'

    chatContainer.appendChild(ChatMessage({
      name: msg.name,
      text: msg.text,
      avatar: avatarImage,
      time: msg.time,
      reaction: msg.reaction || null,
      thread: msg.thread || null,
      deleted: msg.deleted || false,
      voiceNote: msg.voiceNote || null
    }))
  })

  chatExample.appendChild(title)
  chatExample.appendChild(chatContainer)

  return chatExample
}
