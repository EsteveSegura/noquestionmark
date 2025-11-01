export const translations = {
  en: {
    header: {
      title: 'No ? - No just ? - No sólo ?',
      subtitle: 'please don\'t reply with just a question mark in chat'
    },
    intro: {
      text: 'Imagine someone asks you something, and you just stare, raise an eyebrow, and say "?". That\'s what replying with only a question mark feels like online. 😩 It doesn\'t make you look mysterious — it makes you look like you couldn\'t be bothered to communicate clearly.'
    },
    dontDoThis: {
      title: 'Don\'t do this',
      chat: {
        messages: [
          { name: 'Sam', text: 'hey, can you check the report?', time: '2:15 PM' },
          { name: 'Alex', text: '?', time: '2:16 PM' },
          { name: 'Sam', text: 'the weekly one, from Monday', time: '2:17 PM' },
          { name: 'Alex', text: 'ah right — yep, on it', time: '2:18 PM' }
        ]
      },
      explanation: {
        text: 'Alex thought they were being efficient — one character, job done. But that tiny "?" forces the other person to explain themselves again, slowing the whole exchange down. Most people who do this don\'t mean to be rude. It\'s a reflex — "I didn\'t understand, so I\'ll just reply with a question mark." But in text conversations, "?" doesn\'t give context. It adds friction, confusion, and sometimes even passive-aggressive vibes. The same goes for: "??", "¿?", "?", "???", "¿?". Just say what\'s unclear! 🫶'
      }
    },
    doThis: {
      title: 'Instead, try this',
      chat: {
        messages: [
          { name: 'Sam', text: 'hey, can you check the report?', time: '2:15 PM' },
          { name: 'Alex', text: 'which one? weekly or the Monday update?', time: '2:16 PM' },
          { name: 'Sam', text: 'weekly one :)', time: '2:16 PM' },
          { name: 'Alex', text: 'got it — checking now', time: '2:17 PM' }
        ]
      },
      explanation: {
        text: 'Being clear takes maybe two more seconds, but it makes the whole conversation smoother. Instead of "?", try one of these: "Do you mean the weekly one?", "Not sure what you\'re referring to 😅", "Could you clarify what part you mean?", "I don\'t get it — can you explain a bit more?". Clarity is kindness — and async-friendly. If someone comes back later, they\'ll understand exactly what you needed. When done right — everyone saves time. ⏳💬'
      }
    }
  },
  es: {
    header: {
      title: 'No ? - No just ? - No sólo ?',
      subtitle: 'por favor no respondas solo con un signo de interrogación en el chat'
    },
    intro: {
      text: 'Imagina que alguien te pregunta algo, y tú solo miras, levantas una ceja, y dices "?". Así se siente cuando respondes solo con un signo de interrogación online. 😩 No te hace ver misterioso — te hace ver como si no te importara comunicarte claramente.'
    },
    dontDoThis: {
      title: 'No hagas esto',
      chat: {
        messages: [
          { name: 'Sam', text: 'oye, ¿puedes revisar el reporte?', time: '2:15 PM' },
          { name: 'Alex', text: '?', time: '2:16 PM' },
          { name: 'Sam', text: 'el semanal, del lunes', time: '2:17 PM' },
          { name: 'Alex', text: 'ah claro — ya lo veo', time: '2:18 PM' }
        ]
      },
      explanation: {
        text: 'Alex pensó que estaba siendo eficiente — un carácter, trabajo hecho. Pero ese pequeño "?" obliga a la otra persona a explicarse de nuevo, haciendo más lento todo el intercambio. La mayoría de las personas que hacen esto no intentan ser groseras. Es un reflejo — "no entendí, así que responderé con un signo de interrogación." Pero en conversaciones de texto, "?" no da contexto. Añade fricción, confusión, y a veces incluso un tono pasivo-agresivo. Lo mismo va para: "??", "¿?", "?", "???", "¿?". ¡Solo di qué no está claro! 🫶'
      }
    },
    doThis: {
      title: 'En su lugar, intenta esto',
      chat: {
        messages: [
          { name: 'Sam', text: 'oye, ¿puedes revisar el reporte?', time: '2:15 PM' },
          { name: 'Alex', text: '¿cuál? ¿el semanal o la actualización del lunes?', time: '2:16 PM' },
          { name: 'Sam', text: 'el semanal :)', time: '2:16 PM' },
          { name: 'Alex', text: 'entendido — revisándolo ahora', time: '2:17 PM' }
        ]
      },
      explanation: {
        text: 'Ser claro toma tal vez dos segundos más, pero hace que toda la conversación sea más fluida. En lugar de "?", intenta alguna de estas: "¿Te refieres al semanal?", "No estoy seguro a qué te refieres 😅", "¿Podrías aclarar qué parte?", "No lo entiendo — ¿puedes explicar un poco más?". La claridad es amabilidad — y amigable para comunicación asíncrona. Si alguien vuelve más tarde, entenderá exactamente qué necesitabas. Cuando se hace bien — todos ahorran tiempo. ⏳💬'
      }
    }
  }
}

export const defaultLanguage = 'en'
export const supportedLanguages = ['en', 'es']
