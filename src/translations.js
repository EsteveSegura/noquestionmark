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
    },
    doThis: {
      title: 'Try this instead',
      chat: {
        messages: [
          { name: 'Alice', text: 'Hey, can you help me with the deployment process?' },
          { name: 'Bob', text: 'Sure! Which part do you need help with? The build step or the actual deployment?' },
          { name: 'Alice', text: 'The deployment to production, I\'m not sure about the commands.' },
          { name: 'Bob', text: 'Got it! You need to run "npm run deploy:prod" from the root directory.' }
        ]
      },
      explanation: {
        text: 'Being specific about what you need clarification on keeps the conversation flowing. Ask targeted questions that show you\'re engaged and help the other person understand exactly what information you\'re looking for.'
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
    },
    doThis: {
      title: 'Intenta esto en su lugar',
      chat: {
        messages: [
          { name: 'Alice', text: '¿Puedes ayudarme con el proceso de despliegue?' },
          { name: 'Bob', text: '¡Claro! ¿Con qué parte necesitas ayuda? ¿El build o el despliegue en sí?' },
          { name: 'Alice', text: 'El despliegue a producción, no estoy segura de los comandos.' },
          { name: 'Bob', text: '¡Entendido! Necesitas ejecutar "npm run deploy:prod" desde el directorio raíz.' }
        ]
      },
      explanation: {
        text: 'Ser específico sobre lo que necesitas aclarar mantiene la conversación fluida. Haz preguntas concretas que demuestren que estás involucrado y ayuda a la otra persona a entender exactamente qué información estás buscando.'
      }
    }
  }
}

export const defaultLanguage = 'en'
export const supportedLanguages = ['en', 'es']
