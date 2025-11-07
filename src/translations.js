export const pages = {
  // TODO: Split pages in separated files
  home: {
    en: {
      header: {
        title: "ChatCrimes",
        subtitle: "From the lonely \"hi\" to the haunting \"?\", explore the tiny crimes ruining every chat.",
      },
      // TODO: This is not used, we can remove
      intro: {
        text: "Everyday chats, countless crimes.<br />Learn to message better, before it's too late."
      },
      crimesList: {
        title: "Explore some ChatCrimes",
        items: [
          { url: "/no-question-mark", text: "No ? - Don't reply with just a question mark" },
          { url: "/no-channel-only", text: "No #channel-only - Don't reply with just a channel name" },
          { url: "/no-public-shaming", text: "No public shaming - Don't call people out in public channels" }
        ]
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
    es : {
      header: {
        title: "ChatCrimes",
        subtitle: "Desde el solitario \"hola\" hasta el inquietante \"?\", explora los pequeños crímenes que arruinan cada chat.",
      },
      // TODO: This is not used, we can remove
      intro: {
        text: "Chats de todos los días, crímenes incontables.<br />Aprende a mensajear mejor, antes de que sea demasiado tarde."
      },
      crimesList: {
        title: "Explora algunos ChatCrimes",
        items: [
          { url: "/no-question-mark", text: "No ? - No respondas solo con un signo de interrogación" },
          { url: "/no-channel-only", text: "No solo #canal - No respondas solo con un nombre de canal" },
          { url: "/no-public-shaming", text: "No public shaming - No señales a la gente en canales públicos" }
        ]
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
  nopublicshaming: {
    en: {
      header: {
        title: "No public shaming",
        subtitle: "please don't call people out in public channels",
        animations: [
          "@here",
          "we're waiting",
          "public callout",
          "name and shame",
          "why didn't you join?",
          "join or not?"
        ]
      },
      intro: {
        text: "Imagine posting a megaphone ping to pressure someone in front of everyone, instead of solving the problem directly... 🤦‍♀️"
      },
      dontDoThis: {
        title: "❌ Don't do this",
        chat: {
          messages: [
            {
              name: "T.J Miller",
              text: "@channel Thomas, are you joining the meeting or not? It is important",
              time: "9:00 AM"
            },
            {
              name: "Thomas Middleditch",
              text: "I do not think I can today",
              time: "9:01 AM"
            },
            {
              name: "T.J Miller",
              text: "It is really important, we are all waiting",
              time: "9:02 AM"
            },
            {
              name: "Thomas Middleditch",
              text: "Maybe we should take this to DM or a thread",
              time: "9:03 AM"
            }
          ]
        },
        explanation: {
          text: "<p>Public shaming feels fast, but it is a shortcut that <strong>burns trust</strong>. Calling someone out in front of the whole channel adds <strong>pressure, noise</strong>, and turns a simple check in into a spectacle.</p>\n\n<p>Most people who do this <strong>do not mean harm</strong>, it is a reflex, <em>we are blocked, so I will ping loudly</em>.</p>\n\n<p>But in group chats, <strong>a public callout rarely gives context</strong>. It creates <strong>defensiveness</strong>, invites <em>pile ons</em>, and wastes time while everyone watches.</p>\n\n<p>The same foes for:</p>\n<ul>\n  <li>@here Thomas, why did you miss the standup?</li>\n  <li>We are all waiting on you</li>\n  <li>Can you explain in front of everyone why this is late?</li>\n  <li>Name and shame lists</li>\n  <li>Posting screenshots of private DMs in a channel</li>\n</ul>\n\n<p><strong>Respect in public, feedback in private</strong></p>"
        }
      },
      doThis: {
        title: "✅ Instead, try this",
        chat: {
          messages: [
            {
              name: "T.J Miller",
              text: "hey Thomas, quick DM: can you join standup? If not, I can share a short update in channel",
              time: "9:05 AM"
            },
            {
              name: "Thomas Middleditch",
              text: "Running late, cannot join, feel free to post that I will read updates later",
              time: "9:06 AM"
            },
            {
              name: "T.J Miller",
              text: "No problem, I will summarize and move details to a thread",
              time: "9:07 AM"
            },
            {
              name: "Thomas Middleditch",
              text: "Thanks",
              time: "9:08 AM"
            }
          ]
        },
        explanation: {
          text: "<p><strong>Choose private first</strong>, or start a thread. Ask clearly, give context, and offer a next step. It takes a few more words, and it saves the whole team minutes.</p>\n\n<p>Instead of a public callout, try:</p>\n<p>The same foes for:</p>\n<ul>\n  <li>DM: can you join the standup? If not, share a quick update I can post</li>\n  <li>Neutral channel note: We will start, Thomas will catch up later</li>\n  <li>Threading follow ups so the channel stays clear</li>\n  <li>Assume positive intent, ask for status, suggest an option</li>\n</ul>\n\n<p><strong>Clarity with kindness scales</strong></p>"
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
        title: "No public shaming",
        subtitle: "por favor no señales a la gente en canales públicos",
        animations: [
          "@aqui",
          "estamos esperando",
          "llamada pública",
          "name and shame",
          "por qué no viniste?",
          "vienes o no?"
        ]
      },
      intro: {
        text: "Imagina lanzar un ping con megáfono para presionar a alguien delante de todos, en vez de resolverlo directo y con calma... 🤦‍♀️"
      },
      dontDoThis: {
        title: "❌ Don't do this",
        chat: {
          messages: [
            {
              name: "T.J Miller",
              text: "@channel Thomas, vas a entrar a la reunión o no? Es importante",
              time: "9:00 AM"
            },
            {
              name: "Thomas Middleditch",
              text: "Creo que hoy no puedo",
              time: "9:01 AM"
            },
            {
              name: "T.J Miller",
              text: "Es muy importante, todos estamos esperando",
              time: "9:02 AM"
            },
            {
              name: "Thomas Middleditch",
              text: "Quizás esto es mejor hablarlo por DM o en un hilo",
              time: "9:03 AM"
            }
          ]
        },
        explanation: {
          text: "<p>El public shaming parece rápido, pero es un atajo que <strong>rompe la confianza</strong>. Señalar a alguien delante de todo el canal añade <strong>presión y ruido</strong>, y convierte un simple check en un espectáculo.</p>\n\n<p>La mayoría no lo hace con mala intención, es un reflejo, <em>estamos bloqueados, así que haré un ping fuerte</em>.</p>\n\n<p>Pero en chats grupales, <strong>una llamada pública rara vez da contexto</strong>. Genera <strong>defensiva</strong>, invita a <em>pile ons</em>, y hace perder tiempo mientras todos miran.</p>\n\n<p>The same foes for:</p>\n<ul>\n  <li>@here Thomas, por qué faltaste al standup?</li>\n  <li>Todos estamos esperando por ti</li>\n  <li>Puedes explicar delante de todos por qué está tarde?</li>\n  <li>Listas de name and shame</li>\n  <li>Publicar capturas de DMs privados en un canal</li>\n</ul>\n\n<p><strong>Respeto en público, feedback en privado</strong></p>"
        }
      },
      doThis: {
        title: "✅ Instead, try this",
        chat: {
          messages: [
            {
              name: "T.J Miller",
              text: "hola Thomas, por DM rápido, puedes venir al standup? Si no, comparto un breve update en el canal",
              time: "9:05 AM"
            },
            {
              name: "Thomas Middleditch",
              text: "Voy tarde, no puedo entrar, publica que leeré los updates luego",
              time: "9:06 AM"
            },
            {
              name: "T.J Miller",
              text: "Sin problema, lo resumo y muevo los detalles a un hilo",
              time: "9:07 AM"
            },
            {
              name: "Thomas Middleditch",
              text: "Gracias",
              time: "9:08 AM"
            }
          ]
        },
        explanation: {
          text: "<p><strong>Elige primero lo privado</strong>, o abre un hilo. Pregunta con claridad, da contexto y ofrece un siguiente paso. Son unas palabras más, y le ahorras minutos a todo el equipo.</p>\n\n<p>En lugar de avergonzar en público, prueba:</p>\n<p>The same foes for:</p>\n<ul>\n  <li>DM: puedes venir al standup? Si no, dame un breve update para publicar</li>\n  <li>Nota neutral en canal: Empezamos, Thomas se pondrá al día luego</li>\n  <li>Usar hilos para los seguimientos y mantener el canal limpio</li>\n  <li>Asume buena intención, pide estado, sugiere una opción</li>\n</ul>\n\n<p><strong>Claridad con amabilidad escala</strong></p>"
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
