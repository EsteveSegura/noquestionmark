export const translations = {
  en: {
    header: {
      title: 'No ?',
      subtitle: 'please don\'t reply with just a question mark in chat'
    },
    intro: {
      text: 'Imagine someone asks you something, and you just stare, raise an eyebrow, and say "?"... 🤦‍♀️'
    },
    dontDoThis: {
      title: '❌ Don\'t do this',
      chat: {
        messages: [
          { name: 'Sam', text: 'hey, can you check the report?', time: '2:15 PM' },
          { name: 'Alex', text: '?', time: '2:16 PM' },
          { name: 'Sam', text: 'the weekly one, from Monday', time: '2:17 PM' },
          { name: 'Alex', text: 'ah right — yep, on it', time: '2:18 PM' }
        ]
      },
      explanation: {
        text: `<p>Alex thought they were being efficient — one character, job done.</p>

<p>But that tiny "?" forces the other person to explain themselves again, slowing the whole exchange down.</p>

<p>Most people who do this don't mean to be rude. It's a reflex — "I didn't understand, so I'll just reply with a question mark."</p>

<p>But in text conversations, <strong>"?" doesn't give context.</strong> It adds friction, confusion, and sometimes even passive-aggressive vibes.</p>

<p>The same goes for:</p>
<ul>
  <li>"??"</li>
  <li>"¿?"</li>
  <li>"???"</li>
</ul>

<p>Just say what's unclear! 🫶</p>`
      }
    },
    doThis: {
      title: '✅ Instead, try this',
      chat: {
        messages: [
          { name: 'Sam', text: 'hey, can you check the report?', time: '2:15 PM' },
          { name: 'Alex', text: 'which one? weekly or the Monday update?', time: '2:16 PM' },
          { name: 'Sam', text: 'weekly one :)', time: '2:16 PM' },
          { name: 'Alex', text: 'got it — checking now', time: '2:17 PM' }
        ]
      },
      explanation: {
        text: `<p>Being clear takes maybe two more seconds, but it makes the whole conversation smoother.</p>

<p>Instead of "?", try one of these:</p>
<ul>
  <li>"Do you mean the weekly one?"</li>
  <li>"Not sure what you're referring to 😅"</li>
  <li>"Could you clarify what part you mean?"</li>
  <li>"I don't get it — can you explain a bit more?"</li>
</ul>

<p>Clarity is kindness — and async-friendly. If someone comes back later, they'll understand exactly what you needed.</p>

<p>When done right — everyone saves time. ⏳💬</p>`
      }
    }
  },
  es: {
    header: {
      title: 'No ? ',
      subtitle: 'por favor no respondas solo con un signo de interrogación en el chat'
    },
    intro: {
      text: 'Imagina que alguien te pregunta algo, y tú solo miras, levantas una ceja, y dices "?"... 🤦‍♀️'
    },
    dontDoThis: {
      title: '❌ No hagas esto',
      chat: {
        messages: [
          { name: 'Sam', text: 'oye, ¿puedes revisar el reporte?', time: '2:15 PM' },
          { name: 'Alex', text: '?', time: '2:16 PM' },
          { name: 'Sam', text: 'el semanal, del lunes', time: '2:17 PM' },
          { name: 'Alex', text: 'ah claro — ya lo veo', time: '2:18 PM' }
        ]
      },
      explanation: {
        text: `<p>Alex pensó que estaba siendo eficiente — un carácter, trabajo hecho.</p>

<p>Pero ese pequeño "?" obliga a la otra persona a explicarse de nuevo, haciendo más lento todo el intercambio.</p>

<p>La mayoría de las personas que hacen esto no intentan ser groseras. Es un reflejo — "no entendí, así que responderé con un signo de interrogación."</p>

<p>Pero en conversaciones de texto, <strong>"?" no da contexto.</strong> Añade fricción, confusión, y a veces incluso un tono pasivo-agresivo.</p>

<p>Lo mismo va para:</p>
<ul>
  <li>"??"</li>
  <li>"¿?"</li>
  <li>"???"</li>
</ul>

<p>¡Solo di qué no está claro! 🫶</p>`
      }
    },
    doThis: {
      title: '✅ En su lugar, intenta esto',
      chat: {
        messages: [
          { name: 'Sam', text: 'oye, ¿puedes revisar el reporte?', time: '2:15 PM' },
          { name: 'Alex', text: '¿cuál? ¿el semanal o la actualización del lunes?', time: '2:16 PM' },
          { name: 'Sam', text: 'el semanal :)', time: '2:16 PM' },
          { name: 'Alex', text: 'entendido — revisándolo ahora', time: '2:17 PM' }
        ]
      },
      explanation: {
        text: `<p>Ser claro toma tal vez dos segundos más, pero hace que toda la conversación sea más fluida.</p>

<p>En lugar de "?", intenta alguna de estas:</p>
<ul>
  <li>"¿Te refieres al semanal?"</li>
  <li>"No estoy seguro a qué te refieres 😅"</li>
  <li>"¿Podrías aclarar qué parte?"</li>
  <li>"No lo entiendo — ¿puedes explicar un poco más?"</li>
</ul>

<p>La claridad es amabilidad — y amigable para comunicación asíncrona. Si alguien vuelve más tarde, entenderá exactamente qué necesitabas.</p>

<p>Cuando se hace bien — todos ahorran tiempo. ⏳💬</p>`
      }
    }
  }
}

export const defaultLanguage = 'en'
export const supportedLanguages = ['en', 'es']
