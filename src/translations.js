export const translations = {
  en: {
    header: {
      title: 'No Question Mark',
      subtitle: 'Please don\'t just respond with "?" in chat'
    },
    intro: {
      text: 'Imagine someone asks you something, and you just stare, raise an eyebrow, and say "?".'
    },
    dontDoThis: {
      title: 'Don\'t do this',
      chat: {
        messages: [
          { name: 'Alice', text: 'Hey, can you help me with the deployment process?' },
          { name: 'Bob', text: '?' },
          { name: 'Alice', text: 'The deployment... you know, to production?' },
          { name: 'Bob', text: '?' }
        ]
      },
      explanation: {
        text: 'Responding with just "?" is unhelpful and frustrating. It forces the other person to guess what you\'re confused about. Instead, ask a specific question or explain what you need clarification on.'
      }
    }
  },
  es: {
    header: {
      title: 'Sin Signos de Interrogación',
      subtitle: 'Por favor no respondas solo con "?" en el chat'
    },
    intro: {
      text: 'Imagina que alguien te pregunta algo, y tú solo miras, levantas una ceja, y dices "?".'
    },
    dontDoThis: {
      title: 'No hagas esto',
      chat: {
        messages: [
          { name: 'Alice', text: '¿Puedes ayudarme con el proceso de despliegue?' },
          { name: 'Bob', text: '?' },
          { name: 'Alice', text: 'El despliegue... ya sabes, a producción?' },
          { name: 'Bob', text: '?' }
        ]
      },
      explanation: {
        text: 'Responder solo con "?" es inútil y frustrante. Obligas a la otra persona a adivinar qué es lo que no entiendes. En su lugar, haz una pregunta específica o explica qué necesitas que te aclaren.'
      }
    }
  }
}

export const defaultLanguage = 'en'
export const supportedLanguages = ['en', 'es']
