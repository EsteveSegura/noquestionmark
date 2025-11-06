export const pages = {
  test: {
    en: {
      test: 'test'
    }
  },
  nochannelonly: {
  en: {
      header: {
        title: "No #channel-only",
        subtitle: "please don't reply with just a channel name in chat",
        animations: [
          "#web-team",
          "#channel",
          "wrong channel",
          "pls in #devops",
          "not here",
          "take to #web-team"
        ]
      },
      intro: {
        text: "You ask a clear question, and someone replies only with a hashtag, then vanishes for 20 minutes... 🤦‍♀️"
      },
      dontDoThis: {
        title: "❌ Don't do this",
        chat: {
          messages: [
            {
              name: "T.J Miller",
              text: "hey, quick question about the landing page status?",
              time: "11:04 AM"
            },
            {
              name: "Thomas Middleditch",
              text: "#web-team",
              time: "11:24 AM"
            },
            {
              name: "T.J Miller",
              text: "cool, but is it ready for review or still in progress?",
              time: "11:45 AM"
            }
          ]
        },
        explanation: {
          text: "<p>Thomas Middleditch thinks he is helping by pointing to a channel. But replying only with <em>#web-team</em> gives no context, it forces the other person to ask again, wait, and lose momentum.</p><p>Most people do not mean to be gatekeepers, it is a reflex, a nudge to move the chat. But in text conversations, a lone channel name is not an answer, it is a speed bump.</p><p>The same foes for:</p><ul><li>#design</li><li>#support</li><li>#random</li><li>pls in #x</li><li>wrong channel</li><li>take to #team</li></ul><p><strong>Answer first, then suggest the right channel</strong></p>"
        }
      },
      doThis: {
        title: "✅ Instead, try this",
        chat: {
          messages: [
            {
              name: "T.J Miller",
              text: "hey, quick question about the landing page status?",
              time: "11:04 AM"
            },
            {
              name: "Thomas Middleditch",
              text: "it is ready for review, link is in the doc, also this would fit better in #web-team next time",
              time: "11:06 AM"
            },
            {
              name: "T.J Miller",
              text: "perfect, will move the thread there, thanks",
              time: "11:07 AM"
            },
            {
              name: "Thomas Middleditch",
              text: "great, looping #web-team so others can see",
              time: "11:07 AM"
            }
          ]
        },
        explanation: {
          text: "<p><strong>Lead with the answer</strong>, then add a gentle redirect. It solves the problem now, and guides the conversation next time.</p><p>Short, kind, and complete messages help async work, the person who returns later will understand exactly what happened.</p><p>The same foes for:</p><ul><li>It is ready for review, next time let's use #web-team</li><li>The bug is fixed, we can move follow ups to #support</li><li>Yes, the data is in the sheet, future questions fit in #analytics</li><li>We deploy at 3 PM, details in #release</li></ul><p><strong>Clarity first, routing second</strong></p>"
        }
      },
      footer: {
        paragraphs: [
          "This is kinda only half serious (kinda 👀) so please don't get mad at the person who sent you here.",
          "That said, if you see this site's URL as someone's status/bio, be prepared to be ignored if you only reply with \"?\".",
          "Inspired by the wonderful <a href=\"https://nohello.net\" target=\"_blank\" rel=\"noopener noreferrer\">nohello.net</a>. Avatars taken from Silicon Valley. Open-source on <a href=\"https://github.com/EsteveSegura/noquestionmark\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a>.",
          "Made by <a href=\"https://girlazo.com\" target=\"_blank\" rel=\"noopener noreferrer\">Esteve Segura</a>.",
          "This site is available in: <a href=\"/en\">English</a>, <a href=\"/es\">Español</a>"
        ]
      }
    },
    es: {
      header: {
        title: "No solo #canal",
        subtitle: "por favor no respondas solo con un nombre de canal en el chat",
        animations: [
          "#web-team",
          "#canal",
          "canal equivocado",
          "mejor en #devops",
          "no aqui",
          "llevalo a #web-team"
        ]
      },
      intro: {
        text: "Haces una pregunta clara, y alguien responde solo con un hashtag, luego desaparece 20 minutos... 🤦‍♀️"
      },
      dontDoThis: {
        title: "❌ Don't do this",
        chat: {
          messages: [
            {
              name: "T.J Miller",
              text: "oye, duda rápida sobre el estado de la landing?",
              time: "11:04 AM"
            },
            {
              name: "Thomas Middleditch",
              text: "#equipo-web",
              time: "11:24 AM"
            },
            {
              name: "T.J Miller",
              text: "ok, pero está lista para revisar o sigue en progreso?",
              time: "11:45 AM"
            }
          ]
        },
        explanation: {
          text: "<p>Thomas Middleditch cree que ayuda al señalar un canal. Pero responder solo con <em>#equipo-web</em> no da contexto, obliga a la otra persona a preguntar de nuevo, esperar, y perder ritmo.</p><p>La mayoría no intenta poner barreras, es un reflejo, un empujón para mover la conversación. Pero en texto, un nombre de canal aislado no es una respuesta, es un bache.</p><p>The same foes for:</p><ul><li>#diseño</li><li>#soporte</li><li>#random</li><li>pls in #x</li><li>canal equivocado</li><li>llévalo a #equipo</li></ul><p><strong>Responde primero, luego sugiere el canal adecuado</strong></p>"
        }
      },
      doThis: {
        title: "✅ Instead, try this",
        chat: {
          messages: [
            {
              name: "T.J Miller",
              text: "oye, duda rápida sobre el estado de la landing?",
              time: "11:04 AM"
            },
            {
              name: "Thomas Middleditch",
              text: "está lista para revisar, el enlace está en el doc, además esto iría mejor en #equipo-web la próxima vez",
              time: "11:06 AM"
            },
            {
              name: "T.J Miller",
              text: "perfecto, muevo el hilo allí, gracias",
              time: "11:07 AM"
            },
            {
              name: "Thomas Middleditch",
              text: "genial, aviso a #equipo-web para que lo vean",
              time: "11:07 AM"
            }
          ]
        },
        explanation: {
          "text": "<p><strong>Empieza con la respuesta</strong>, luego añade una redirección amable. Resuelve el problema ahora, y guía la conversación para la próxima.</p><p>Mensajes cortos, amables y completos ayudan al trabajo asíncrono, quien vuelva más tarde entenderá exactamente qué pasó.</p><p>The same foes for:</p><ul><li>Está listo para revisar, la próxima usemos #equipo-web</li><li>El bug está arreglado, podemos mover el seguimiento a #soporte</li><li>Sí, los datos están en la hoja, futuras dudas van a #analítica</li><li>Desplegamos a las 3 PM, detalles en #release</li></ul><p><strong>Claridad primero, enrutado después</strong></p>"
        }
      },
      footer: {
        paragraphs: [
          "Esto es solo medio en serio (medio 👀), así que no te enojes con la persona que te envió aquí.",
          "Dicho esto, si ves la URL de este sitio en el estado/bio de alguien, prepárate para ser ignorado si solo respondes con \"?\".",
          "Inspirado en el maravilloso <a href=\"https://nohello.net\" target=\"_blank\" rel=\"noopener noreferrer\">nohello.net</a>. Avatares tomados de Silicon Valley. Código abierto en <a href=\"https://github.com/EsteveSegura/noquestionmark\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a>.",
          "Hecho por <a href=\"https://girlazo.com\" target=\"_blank\" rel=\"noopener noreferrer\">Esteve Segura</a>.",
          "Este sitio está disponible en: <a href=\"/en\">English</a>, <a href=\"/es\">Español</a>"
        ]
      }
    }
  },
  noquestionmark: {
    en: {
      header: {
        title: 'No ?',
        subtitle: 'please don\'t reply with just a question mark in chat',
        animations: ['?', '...?', 'rlly?', 'uh?', '?????', '¿¿??']
      },
      intro: {
        text: 'Imagine someone asks you something, and you just stare, raise an eyebrow, and say "?"... 🤦‍♀️'
      },
      dontDoThis: {
        title: '❌ Don\'t do this',
        chat: {
          messages: [
            { name: 'T.J Miller', text: 'hey, can you check the report?', time: '2:15 PM' },
            { name: 'Thomas Middleditch', text: '?', time: '2:16 PM' },
            { name: 'T.J Miller', text: 'the weekly one, from Monday', time: '2:17 PM' },
            { name: 'Thomas Middleditch', text: 'ah right, yep, on it', time: '2:18 PM' }
          ]
        },
        explanation: {
          text: `<p>Thomas Middleditch thought he was being efficient: <em>one character, job done</em>. <strong>But that tiny "?" forces the other person to explain themselves again</strong>, slowing the whole exchange down.</p>

<p>Most people who do this <strong>don't mean to be rude</strong>. It's a reflex: <em>"I didn't understand, so I'll just reply with a question mark."</em></p>

<p>But in text conversations, <strong>"?" doesn't give context.</strong> It adds <strong>friction, confusion</strong>, and sometimes even <em>passive-aggressive vibes</em>.</p>

<p>The same goes for:</p>
<ul>
  <li>...?</li>
  <li>rlly?</li>
  <li>uh?</li>
  <li>?????</li>
  <li>¿¿??</li>
</ul>

<p><strong>Just say what's unclear!</strong></p>`
        }
      },
      doThis: {
        title: '✅ Instead, try this',
        chat: {
          messages: [
            { name: 'T.J Miller', text: 'hey, can you check the report?', time: '2:15 PM' },
            { name: 'Thomas Middleditch', text: 'which one? weekly or the Monday update?', time: '2:16 PM' },
            { name: 'T.J Miller', text: 'weekly one :)', time: '2:16 PM' },
            { name: 'Thomas Middleditch', text: 'got it, checking now', time: '2:17 PM' }
          ]
        },
        explanation: {
          text: `<p><strong>Being clear takes maybe two more seconds</strong>, but it makes the whole conversation smoother.</p>

<p>Instead of "?", try one of these:</p>
<ul>
  <li>Do you mean the weekly one?</li>
  <li>Not sure what you're referring to</li>
  <li>Could you clarify what part you mean?</li>
  <li>I don't get it, can you explain a bit more?</li>
</ul>

<p><strong>Clarity is kindness</strong>, and <em>async-friendly</em>. If someone comes back later, they'll understand <strong>exactly what you needed</strong>.</p>

<p>When done right, <strong>everyone saves time</strong>. 🎉</p>`
        }
      },
      footer: {
        paragraphs: [
          'This is kinda only half serious (kinda 👀) so please don\'t get mad at the person who sent you here.',
          'That said, if you see this site\'s URL as someone\'s status/bio, be prepared to be ignored if you only reply with "?".',
          'Inspired by the wonderful <a href="https://nohello.net" target="_blank" rel="noopener noreferrer">nohello.net</a>. Avatars taken from Silicon Valley. Open-source on <a href="https://github.com/EsteveSegura/noquestionmark" target="_blank" rel="noopener noreferrer">GitHub</a>.',
          'Made by <a href="https://girlazo.com" target="_blank" rel="noopener noreferrer">Esteve Segura</a>.',
          'This site is available in: <a href="/en">English</a>, <a href="/es">Español</a>'
        ]
      }
    },
    es: {
      header: {
        title: 'No ? ',
        subtitle: 'por favor no respondas solo con un signo de interrogación en el chat',
        animations: ['?', '...?', 'enserio?', 'eh?', '?????', '¿¿??']
      },
      intro: {
        text: 'Imagina que alguien te pregunta algo, y tú solo miras, levantas una ceja, y dices "?"... 🤦‍♀️'
      },
      dontDoThis: {
        title: '❌ No hagas esto',
        chat: {
          messages: [
            { name: 'T.J Miller', text: 'oye, ¿puedes revisar el reporte?', time: '2:15 PM' },
            { name: 'Thomas Middleditch', text: '?', time: '2:16 PM' },
            { name: 'T.J Miller', text: 'el semanal, del lunes', time: '2:17 PM' },
            { name: 'Thomas Middleditch', text: 'ah claro, ya lo veo', time: '2:18 PM' }
          ]
        },
        explanation: {
          text: `<p>Thomas Middleditch pensó que estaba siendo eficiente: <em>un carácter, trabajo hecho</em>. <strong>Pero ese pequeño "?" obliga a la otra persona a explicarse de nuevo</strong>, haciendo más lento todo el intercambio.</p>

<p>La mayoría de las personas que hacen esto <strong>no intentan ser groseras</strong>. Es un reflejo: <em>"no entendí, así que responderé con un signo de interrogación."</em></p>

<p>Pero en conversaciones de texto, <strong>"?" no da contexto.</strong> Añade <strong>fricción, confusión</strong>, y a veces incluso <em>un tono pasivo-agresivo</em>.</p>

<p>Lo mismo va para:</p>
<ul>
  <li>...?</li>
  <li>enserio?</li>
  <li>eh?</li>
  <li>?????</li>
  <li>¿¿??</li>
</ul>

<p><strong>¡Solo di qué no está claro!</strong></p>`
        }
      },
      doThis: {
        title: '✅ En su lugar, intenta esto',
        chat: {
          messages: [
            { name: 'T.J Miller', text: 'oye, ¿puedes revisar el reporte?', time: '2:15 PM' },
            { name: 'Thomas Middleditch', text: '¿cuál? ¿el semanal o la actualización del lunes?', time: '2:16 PM' },
            { name: 'T.J Miller', text: 'el semanal :)', time: '2:16 PM' },
            { name: 'Thomas Middleditch', text: 'entendido, revisándolo ahora', time: '2:17 PM' }
          ]
        },
        explanation: {
          text: `<p><strong>Ser claro toma tal vez dos segundos más</strong>, pero hace que toda la conversación sea más fluida.</p>

<p>En lugar de "?", intenta alguna de estas:</p>
<ul>
  <li>¿Te refieres al semanal?</li>
  <li>No estoy seguro a qué te refieres</li>
  <li>¿Podrías aclarar qué parte?</li>
  <li>No lo entiendo, ¿puedes explicar un poco más?</li>
</ul>

<p><strong>La claridad es amabilidad</strong>, y <em>amigable para comunicación asíncrona</em>. Si alguien vuelve más tarde, entenderá <strong>exactamente qué necesitabas</strong>.</p>

<p>Cuando se hace bien, <strong>todos ahorran tiempo</strong>. 🎉</p>`
        }
      },
      footer: {
        paragraphs: [
          'Esto es solo medio en serio (medio 👀), así que no te enojes con la persona que te envió aquí.',
          'Dicho esto, si ves la URL de este sitio en el estado/bio de alguien, prepárate para ser ignorado si solo respondes con "?".',
          'Inspirado en el maravilloso <a href="https://nohello.net" target="_blank" rel="noopener noreferrer">nohello.net</a>. Avatares tomados de Silicon Valley. Código abierto en <a href="https://github.com/EsteveSegura/noquestionmark" target="_blank" rel="noopener noreferrer">GitHub</a>.',
          'Hecho por <a href="https://girlazo.com" target="_blank" rel="noopener noreferrer">Esteve Segura</a>.',
          'Este sitio está disponible en: <a href="/en">English</a>, <a href="/es">Español</a>'
        ]
      }
    }
  }
}

export const defaultLanguage = 'en'
export const supportedLanguages = ['en', 'es']
