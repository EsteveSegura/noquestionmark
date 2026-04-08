import './ChatMessage.css'

function formatMentions(text) {
  return text.replace(/@(\w+)/g, '<span class="chat-message__mention">@$1</span>')
}

export function ChatMessage({ name, text, avatar, time, reaction = null, thread = null }) {
  const message = document.createElement('div')
  message.className = 'chat-message'

  const reactionHTML = reaction ? `
      <div class="chat-message__reaction">
        <img src="${reaction.image}" alt="Thumbs up reaction used as only response" class="chat-message__reaction-image" />
        <span class="chat-message__reaction-count">${reaction.count || 1}</span>
      </div>
  ` : ''

  const threadAvatars = thread ? thread.avatars || ['/img/T_J_Miller.png', '/img/Monica_Hall.png'] : []
  const threadReplies = thread ? thread.replies || 7 : 0
  const threadLastReply = thread ? thread.lastReply || 'Last reply 2 min ago' : ''

  const threadHTML = thread ? `
      <div class="chat-message__thread">
        <div class="chat-message__thread-avatars">
          ${threadAvatars.map((av, i) => `<img src="${av}" alt="Thread participant avatar" class="chat-message__thread-avatar" style="z-index: ${threadAvatars.length - i}" />`).join('')}
        </div>
        <span class="chat-message__thread-replies">${threadReplies} replies</span>
        <span class="chat-message__thread-last">${threadLastReply}</span>
      </div>
  ` : ''

  message.innerHTML = `
    <div class="chat-message__avatar">
      <img src="${avatar}" alt="${name} chat avatar" />
    </div>
    <div class="chat-message__content">
      <div class="chat-message__header">
        <span class="chat-message__name">${name}</span>
        <span class="chat-message__time">${time}</span>
      </div>
      <div class="chat-message__text">${formatMentions(text)}</div>
      ${threadHTML}
      ${reactionHTML}
    </div>
  `

  return message
}
