import './ChatMessage.css'

export function ChatMessage({ name, text, avatar }) {
  const message = document.createElement('div')
  message.className = 'chat-message'

  message.innerHTML = `
    <div class="chat-message__avatar">${avatar}</div>
    <div class="chat-message__content">
      <div class="chat-message__name">${name}</div>
      <div class="chat-message__text">${text}</div>
    </div>
  `

  return message
}
