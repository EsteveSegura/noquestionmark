import './ChatMessage.css'

export function ChatMessage({ name, text, avatar, time, reaction = null }) {
  const message = document.createElement('div')
  message.className = 'chat-message'

  const reactionHTML = reaction ? `
      <div class="chat-message__reaction">
        <img src="${reaction.image}" alt="reaction" class="chat-message__reaction-image" />
        <span class="chat-message__reaction-count">${reaction.count || 1}</span>
      </div>
  ` : ''

  message.innerHTML = `
    <div class="chat-message__avatar">
      <img src="${avatar}" alt="${name}" />
    </div>
    <div class="chat-message__content">
      <div class="chat-message__header">
        <span class="chat-message__name">${name}</span>
        <span class="chat-message__time">${time}</span>
      </div>
      <div class="chat-message__text">${text}</div>
      ${reactionHTML}
    </div>
  `

  return message
}
