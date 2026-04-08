import './ChatMessage.css'

function formatMentions(text) {
  return text.replace(/@(\w+)/g, '<span class="chat-message__mention">@$1</span>')
}

function generateWaveformBars() {
  const barCount = 28
  const bars = []
  for (let i = 0; i < barCount; i++) {
    const height = Math.max(4, Math.floor(Math.sin(i * 0.6 + 1) * 12 + Math.cos(i * 1.2) * 8 + 14))
    bars.push(`<span class="chat-message__voice-bar" style="height: ${height}px"></span>`)
  }
  return bars.join('')
}

function renderVoiceNote(voiceNote) {
  return `
    <div class="chat-message__voice-note">
      <button class="chat-message__voice-play" aria-label="Play voice message">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><polygon points="3,1 12,7 3,13"/></svg>
      </button>
      <div class="chat-message__voice-waveform">
        ${generateWaveformBars()}
      </div>
      <span class="chat-message__voice-duration">${voiceNote.duration}</span>
    </div>
  `
}

export function ChatMessage({ name, text, avatar, time, reaction = null, thread = null, deleted = false, voiceNote = null }) {
  const message = document.createElement('div')
  message.className = 'chat-message' + (deleted ? ' chat-message--deleted' : '')

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
      <div class="chat-message__text">${deleted ? '<span class="chat-message__deleted-label">\u2716 This message was deleted.</span>' : voiceNote ? renderVoiceNote(voiceNote) : formatMentions(text)}</div>
      ${threadHTML}
      ${reactionHTML}
    </div>
  `

  return message
}
