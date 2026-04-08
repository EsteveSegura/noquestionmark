export const pages = {
  // TODO: Split pages in separated files
  home: {
    en: {
      seo: {
        title: "ChatCrimes — The tiny crimes ruining every chat",
        description: "A collection of the tiny crimes ruining every chat. From the lonely 'hi' to the haunting '?'. Learn chat etiquette the fun way.",
        slug: ""
      },
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
          { url: "/no-public-shaming", text: "No public shaming - Don't call people out in public channels" },
          { url: "/no-reaction-as-answer", text: "No reaction as answer - Don't use reactions instead of actual replies" },
          { url: "/use-the-thread", text: "Use the thread - Don't ignore existing threads with answers" },
          { url: "/no-hello", text: "No hello - Don't send a lonely \"hi\" with no context" },
          { url: "/no-message-splitting", text: "No message splitting - Don't split one thought into ten messages" }
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
    es: {
      seo: {
        title: "ChatCrimes — Los pequeños crímenes que arruinan cada chat",
        description: "Una colección de los pequeños crímenes que arruinan cada chat. Desde el solitario 'hola' hasta el inquietante '?'. Aprende etiqueta de chat de forma divertida.",
        slug: ""
      },
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
          { url: "/no-public-shaming", text: "No public shaming - No señales a la gente en canales públicos" },
          { url: "/no-reaction-as-answer", text: "No reacción como respuesta - No uses reacciones en lugar de respuestas reales" },
          { url: "/use-the-thread", text: "Usa el thread - No ignores threads que ya tienen respuestas" },
          { url: "/no-hello", text: "No hello - No mandes un \"hola\" solitario sin contexto" },
          { url: "/no-message-splitting", text: "No message splitting - No partas una idea en diez mensajes" }
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
      seo: {
        title: "Don't shame coworkers in public channels — ChatCrimes",
        description: "Don't call people out in public channels. Learn why public shaming in chat is a crime and how to give feedback privately.",
        slug: "no-public-shaming"
      },
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
      seo: {
        title: "No avergüences a compañeros en canales públicos — ChatCrimes",
        description: "No señales a la gente en canales públicos. Aprende por qué el public shaming en el chat es un crimen y cómo dar feedback en privado.",
        slug: "no-public-shaming"
      },
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
      seo: {
        title: "Don't just reply with a channel name — ChatCrimes",
        description: "Don't reply with just a channel name in chat. Learn why redirecting without answering is a chat crime and what to do instead.",
        slug: "no-channel-only"
      },
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
      seo: {
        title: "No respondas solo con un nombre de canal — ChatCrimes",
        description: "No respondas solo con un nombre de canal en el chat. Aprende por qué redirigir sin responder es un crimen de chat y qué hacer en su lugar.",
        slug: "no-channel-only"
      },
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
      seo: {
        title: "Don't reply with just \"?\" — ChatCrimes",
        description: "Please don't reply with just a question mark in chat. Learn why it's a chat crime and what to do instead.",
        slug: "no-question-mark"
      },
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
      seo: {
        title: "No respondas solo con \"?\" — ChatCrimes",
        description: "Por favor no respondas solo con un signo de interrogación en el chat. Aprende por qué es un crimen de chat y qué hacer en su lugar.",
        slug: "no-question-mark"
      },
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
  },
  noreactionasanswer: {
    en: {
      seo: {
        title: "Stop using reactions as answers — ChatCrimes",
        description: "Don't use emoji reactions instead of actual replies in chat. Learn why it's a chat crime and how to respond properly.",
        slug: "no-reaction-as-answer"
      },
      header: {
        title: 'No reaction as answer',
        subtitle: 'please don\'t use reactions instead of actual replies',
        animations: ['👍', '✅', '👀', '🙏', '👌', '🤔']
      },
      intro: {
        text: 'Imagine someone asks you a question, and you just drop a thumbs up emoji instead of actually answering... 🤦‍♀️'
      },
      dontDoThis: {
        title: '❌ Don\'t do this',
        chat: {
          messages: [
            { name: 'T.J Miller', text: 'hey, were you able to get the API key?', time: '2:15 PM', reaction: { image: '/img/reaction_yes.png', count: 1 } },
            { name: 'T.J Miller', text: 'did you have any problems?', time: '2:45 PM', reaction: { image: '/img/reaction_yes.png', count: 1 } },
            { name: 'T.J Miller', text: 'is it working now?', time: '3:15 PM', reaction: { image: '/img/reaction_yes.png', count: 1 } },
            { name: 'T.J Miller', text: 'please let me know when everything is ready', time: '3:45 PM', reaction: { image: '/img/reaction_yes.png', count: 1 } }
          ]
        },
        explanation: {
          text: `<p>Thomas Middleditch thought a "yes" reaction was enough: <em>one click, job done</em>. <strong>But that reaction doesn't actually answer the question</strong>, it just acknowledges receipt.</p>

<p>Most people who do this <strong>don't mean to ignore you</strong>. It's a reflex: <em>"I saw your message, so I'll react to show I'm on it."</em></p>

<p>But in text conversations, <strong>reactions don't provide enough information.</strong> They add <strong>ambiguity, confusion</strong>, and leave the other person <em>guessing what you actually meant</em>.</p>

<p>Even worse: <strong>reactions don't trigger sound notifications</strong>. So that "yes" you clicked? The other person might not even see it until hours later when they check the chat again.</p>

<p>The same goes for:</p>
<ul>
  <li>👍 instead of "yes, I'll do it"</li>
  <li>✅ instead of "done, here's the link"</li>
  <li>👀 instead of "I'm looking at it now"</li>
  <li>🙏 instead of "thanks, I appreciate it"</li>
  <li>👌 instead of "sounds good, I agree"</li>
</ul>

<p><strong>Reactions are supplements, not substitutes!</strong></p>`
        }
      },
      doThis: {
        title: '✅ Instead, try this',
        chat: {
          messages: [
            { name: 'T.J Miller', text: 'hey, were you able to get the API key?', time: '2:15 PM' },
            { name: 'Thomas Middleditch', text: 'yes! it\'s in the shared vault, check the "prod-keys" folder', time: '2:16 PM' },
            { name: 'T.J Miller', text: 'did you have any problems?', time: '2:17 PM' },
            { name: 'Thomas Middleditch', text: 'had to request access from DevOps, took about an hour', time: '2:18 PM' }
          ]
        },
        explanation: {
          text: `<p><strong>A short message takes maybe five more seconds</strong>, but it makes the whole conversation productive.</p>

<p>Instead of just reacting, try:</p>
<ul>
  <li>On it, will update you in X minutes</li>
  <li>Done! Here's what I found...</li>
  <li>Looking at it now, one sec</li>
  <li>Got it, thanks for the heads up</li>
  <li>Agree, let's go with that approach</li>
</ul>

<p><strong>Words clarify, reactions just acknowledge.</strong> Use reactions <em>after</em> you've actually responded, as a friendly extra, not as the response itself.</p>

<p>When done right, <strong>everyone knows what's happening</strong>. 🎉</p>`
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
      seo: {
        title: "No uses reacciones como respuesta — ChatCrimes",
        description: "No uses reacciones de emoji en lugar de respuestas reales en el chat. Aprende por qué es un crimen de chat y cómo responder correctamente.",
        slug: "no-reaction-as-answer"
      },
      header: {
        title: 'No reacción como respuesta',
        subtitle: 'por favor no uses reacciones en lugar de respuestas reales',
        animations: ['👍', '✅', '👀', '🙏', '👌', '🤔']
      },
      intro: {
        text: 'Imagina que alguien te hace una pregunta, y tú solo dejas un emoji de pulgar arriba en vez de responder... 🤦‍♀️'
      },
      dontDoThis: {
        title: '❌ No hagas esto',
        chat: {
          messages: [
            { name: 'T.J Miller', text: 'oye, ¿pudiste conseguir la API key?', time: '2:15 PM', reaction: { image: '/img/reaction_yes.png', count: 1 } },
            { name: 'T.J Miller', text: '¿tuviste algún problema?', time: '2:45 PM', reaction: { image: '/img/reaction_yes.png', count: 1 } },
            { name: 'T.J Miller', text: '¿ya está funcionando?', time: '3:15 PM', reaction: { image: '/img/reaction_yes.png', count: 1 } },
            { name: 'T.J Miller', text: 'por favor avísame cuando esté todo listo', time: '3:45 PM', reaction: { image: '/img/reaction_yes.png', count: 1 } }
          ]
        },
        explanation: {
          text: `<p>Thomas Middleditch pensó que una reacción de "yes" era suficiente: <em>un clic, trabajo hecho</em>. <strong>Pero esa reacción no responde realmente la pregunta</strong>, solo confirma recepción.</p>

<p>La mayoría de las personas que hacen esto <strong>no intentan ignorarte</strong>. Es un reflejo: <em>"Vi tu mensaje, así que reaccionaré para mostrar que estoy en ello."</em></p>

<p>Pero en conversaciones de texto, <strong>las reacciones no dan suficiente información.</strong> Añaden <strong>ambigüedad, confusión</strong>, y dejan a la otra persona <em>adivinando qué quisiste decir</em>.</p>

<p>Peor aún: <strong>las reacciones no lanzan notificaciones sonoras</strong>. Así que ese "yes" que clicaste, la otra persona puede que no lo vea hasta horas después cuando revise el chat de nuevo.</p>

<p>Lo mismo va para:</p>
<ul>
  <li>👍 en lugar de "sí, lo haré"</li>
  <li>✅ en lugar de "listo, aquí está el enlace"</li>
  <li>👀 en lugar de "lo estoy revisando ahora"</li>
  <li>🙏 en lugar de "gracias, te lo agradezco"</li>
  <li>👌 en lugar de "suena bien, estoy de acuerdo"</li>
</ul>

<p><strong>¡Las reacciones son complementos, no sustitutos!</strong></p>`
        }
      },
      doThis: {
        title: '✅ En su lugar, intenta esto',
        chat: {
          messages: [
            { name: 'T.J Miller', text: 'oye, ¿pudiste conseguir la API key?', time: '2:15 PM' },
            { name: 'Thomas Middleditch', text: '¡sí! está en el vault compartido, revisa la carpeta "prod-keys"', time: '2:16 PM' },
            { name: 'T.J Miller', text: '¿tuviste algún problema?', time: '2:17 PM' },
            { name: 'Thomas Middleditch', text: 'tuve que pedir acceso a DevOps, tardó como una hora', time: '2:18 PM' }
          ]
        },
        explanation: {
          text: `<p><strong>Un mensaje corto toma quizás cinco segundos más</strong>, pero hace que toda la conversación sea productiva.</p>

<p>En lugar de solo reaccionar, intenta:</p>
<ul>
  <li>En ello, te actualizo en X minutos</li>
  <li>¡Listo! Esto es lo que encontré...</li>
  <li>Lo estoy viendo ahora, un momento</li>
  <li>Entendido, gracias por avisar</li>
  <li>De acuerdo, vamos con ese enfoque</li>
</ul>

<p><strong>Las palabras clarifican, las reacciones solo confirman.</strong> Usa reacciones <em>después</em> de haber respondido realmente, como un extra amigable, no como la respuesta en sí.</p>

<p>Cuando se hace bien, <strong>todos saben qué está pasando</strong>. 🎉</p>`
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
  },
  usethethread: {
    en: {
      seo: {
        title: "Use threads, don't flood the channel — ChatCrimes",
        description: "Check existing threads before asking again in the main channel. Learn why ignoring threads is a chat crime.",
        slug: "use-the-thread"
      },
      header: {
        title: 'Use the thread',
        subtitle: 'please check existing threads before asking again',
        animations: ['tldr?', 'pls summary', 'can you summarize?', 'too long', 'just tell me', 'didn\'t read']
      },
      intro: {
        text: 'Imagine someone already documented the answer in a thread, and you ask the same question in the main channel anyway... 🤦‍♀️'
      },
      dontDoThis: {
        title: '❌ Don\'t do this',
        chat: {
          messages: [
            { name: 'T.J Miller', text: 'Deploy process for production', time: '9:00 AM', thread: { replies: 7, lastReply: 'Last reply 2 hours ago' } },
            { name: 'Thomas Middleditch', text: 'hey, can someone explain how to do a deploy?', time: '11:30 AM' }
          ]
        },
        explanation: {
          text: `<p>Thomas Middleditch didn't notice the thread with <strong>7 replies</strong> explaining exactly what he asked. Now someone has to repeat the same information, or worse, point him to the thread he should have checked.</p>

<p>Most people who do this <strong>don't mean to waste anyone's time</strong>. It's a reflex: <em>"I have a question, I'll ask in the channel."</em></p>

<p>But in busy channels, <strong>threads exist to keep information organized</strong>. Ignoring them means:</p>
<ul>
  <li>Duplicated explanations</li>
  <li>Fragmented knowledge</li>
  <li>Frustrated teammates who already answered</li>
  <li>Important context gets lost in the main channel noise</li>
</ul>

<p><strong>Check the threads first!</strong></p>`
        }
      },
      doThis: {
        title: '✅ Instead, try this',
        chat: {
          messages: [
            { name: 'T.J Miller', text: 'Deploy process for production', time: '9:00 AM', thread: { replies: 7, lastReply: 'Last reply 2 hours ago' } },
            { name: 'Thomas Middleditch', text: 'Great, I\'m going to read the entire thread', time: '11:30 AM' }
          ]
        },
        explanation: {
          text: `<p><strong>Before asking, look for threads</strong>. That little "7 replies" indicator is a goldmine of context and answers.</p>

<p>If you read the thread and still have questions:</p>
<ul>
  <li>Reply in the thread itself, not the main channel</li>
  <li>Reference what you already read: "I saw X in the thread, but..."</li>
  <li>Ask for clarification on specific points</li>
</ul>

<p><strong>Threads keep conversations organized</strong>. Using them shows respect for everyone's time and keeps the channel clean.</p>

<p>When done right, <strong>knowledge stays findable</strong>. 🎉</p>`
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
      seo: {
        title: "Usa los threads, no inundes el canal — ChatCrimes",
        description: "Revisa los threads existentes antes de preguntar de nuevo en el canal principal. Aprende por qué ignorar los threads es un crimen de chat.",
        slug: "use-the-thread"
      },
      header: {
        title: 'Usa el thread',
        subtitle: 'por favor revisa los threads existentes antes de preguntar de nuevo',
        animations: ['tldr?', 'resumen pls', '¿me lo resumes?', 'muy largo', 'dime directo', 'no lo leí']
      },
      intro: {
        text: 'Imagina que alguien ya documentó la respuesta en un thread, y tú preguntas lo mismo en el canal principal... 🤦‍♀️'
      },
      dontDoThis: {
        title: '❌ No hagas esto',
        chat: {
          messages: [
            { name: 'T.J Miller', text: 'Proceso de deploy a producción', time: '9:00 AM', thread: { replies: 7, lastReply: 'Última respuesta hace 2 horas' } },
            { name: 'Thomas Middleditch', text: 'oye, ¿alguien me explica cómo hacer un deploy?', time: '11:30 AM' }
          ]
        },
        explanation: {
          text: `<p>Thomas Middleditch no vio el thread con <strong>7 respuestas</strong> explicando exactamente lo que preguntó. Ahora alguien tiene que repetir la misma información, o peor, señalarle el thread que debería haber revisado.</p>

<p>La mayoría de las personas que hacen esto <strong>no quieren hacer perder el tiempo a nadie</strong>. Es un reflejo: <em>"Tengo una pregunta, la haré en el canal."</em></p>

<p>Pero en canales activos, <strong>los threads existen para mantener la información organizada</strong>. Ignorarlos significa:</p>
<ul>
  <li>Explicaciones duplicadas</li>
  <li>Conocimiento fragmentado</li>
  <li>Compañeros frustrados que ya respondieron</li>
  <li>Contexto importante que se pierde en el ruido del canal principal</li>
</ul>

<p><strong>¡Revisa los threads primero!</strong></p>`
        }
      },
      doThis: {
        title: '✅ En su lugar, intenta esto',
        chat: {
          messages: [
            { name: 'T.J Miller', text: 'Proceso de deploy a producción', time: '9:00 AM', thread: { replies: 7, lastReply: 'Última respuesta hace 2 horas' } },
            { name: 'Thomas Middleditch', text: 'Genial, voy a leerme el thread entero', time: '11:30 AM' }
          ]
        },
        explanation: {
          text: `<p><strong>Antes de preguntar, busca threads</strong>. Ese pequeño indicador de "7 replies" es una mina de oro de contexto y respuestas.</p>

<p>Si lees el thread y aún tienes preguntas:</p>
<ul>
  <li>Responde en el thread mismo, no en el canal principal</li>
  <li>Menciona lo que ya leíste: "Vi X en el thread, pero..."</li>
  <li>Pide aclaraciones sobre puntos específicos</li>
</ul>

<p><strong>Los threads mantienen las conversaciones organizadas</strong>. Usarlos muestra respeto por el tiempo de todos y mantiene el canal limpio.</p>

<p>Cuando se hace bien, <strong>el conocimiento sigue siendo encontrable</strong>. 🎉</p>`
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
  },
  nohello: {
    en: {
      seo: {
        title: "Don't just say \"hi\" with no context — ChatCrimes",
        description: "Please don't send a lonely 'hi' or 'hello' in chat and wait. Include your question or context in the first message.",
        slug: "no-hello"
      },
      header: {
        title: "No hello",
        subtitle: "please don't send a lonely \"hi\" and wait",
        animations: ["hi", "hello", "hey", "heyy", "you there?", "hi!"]
      },
      intro: {
        text: "Imagine someone taps you on the shoulder, says \"hi\", and then just… stands there staring at you in silence... 🤦‍♀️"
      },
      dontDoThis: {
        title: "❌ Don't do this",
        chat: {
          messages: [
            { name: "T.J Miller", text: "hi", time: "10:00 AM" },
            { name: "Thomas Middleditch", text: "hey, what's up?", time: "10:03 AM" },
            { name: "T.J Miller", text: "can I ask you something?", time: "10:05 AM" },
            { name: "Thomas Middleditch", text: "...sure, go ahead", time: "10:25 AM" }
          ]
        },
        explanation: {
          text: "<p>T.J Miller thought he was being polite: <em>say hi first, then ask</em>. <strong>But that lonely \"hi\" forces the other person to stop what they're doing and wait</strong> for the actual question that never comes.</p>\n\n<p>Most people who do this <strong>don't mean to waste anyone's time</strong>. It's a reflex: <em>\"I should greet them before asking something.\"</em></p>\n\n<p>But in text conversations, <strong>\"hi\" with no follow-up creates dead air</strong>. It adds <strong>unnecessary waiting, context switching</strong>, and sometimes even <em>anxiety about what's coming next</em>.</p>\n\n<p>The same goes for:</p>\n<ul>\n  <li>hello</li>\n  <li>hey, you there?</li>\n  <li>hi, got a minute?</li>\n  <li>can I ask you something?</li>\n  <li>hey! *then nothing for 10 minutes*</li>\n</ul>\n\n<p><strong>Say hi and ask your question in the same message!</strong></p>"
        }
      },
      doThis: {
        title: "✅ Instead, try this",
        chat: {
          messages: [
            { name: "T.J Miller", text: "hey! quick question — is the staging environment ready for QA testing today?", time: "10:00 AM" },
            { name: "Thomas Middleditch", text: "hi! yes, deployed this morning, you can start testing now", time: "10:02 AM" },
            { name: "T.J Miller", text: "perfect, jumping in now, thanks!", time: "10:03 AM" }
          ]
        },
        explanation: {
          text: "<p><strong>Including your question upfront takes zero extra effort</strong>, but it lets the other person answer immediately, even if they see it hours later.</p>\n\n<p>Instead of just \"hi\", try:</p>\n<ul>\n  <li>Hey! Can you check the deploy logs from this morning?</li>\n  <li>Hi, quick one — do you have the API docs link?</li>\n  <li>Hello! Is the design review still happening at 3?</li>\n  <li>Hey, I need access to the staging DB, can you help?</li>\n</ul>\n\n<p><strong>Greet and ask in one shot.</strong> It's still friendly, and it's <em>async-friendly</em> too. The other person can respond on their own time with all the context they need.</p>\n\n<p>When done right, <strong>everyone saves time</strong>. 🎉</p>"
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
      seo: {
        title: "No mandes solo un \"hola\" sin contexto — ChatCrimes",
        description: "Por favor no mandes un 'hola' solitario en el chat y te quedes esperando. Incluye tu pregunta o contexto en el primer mensaje.",
        slug: "no-hello"
      },
      header: {
        title: "No hello",
        subtitle: "por favor no mandes un \"hola\" solitario y te quedes esperando",
        animations: ["hola", "buenas", "ey", "holi", "estás ahí?", "hola!"]
      },
      intro: {
        text: "Imagina que alguien te toca el hombro, dice \"hola\", y luego se queda ahí… mirándote en silencio... 🤦‍♀️"
      },
      dontDoThis: {
        title: "❌ No hagas esto",
        chat: {
          messages: [
            { name: "T.J Miller", text: "hola", time: "10:00 AM" },
            { name: "Thomas Middleditch", text: "ey, ¿qué pasa?", time: "10:03 AM" },
            { name: "T.J Miller", text: "¿te puedo preguntar algo?", time: "10:05 AM" },
            { name: "Thomas Middleditch", text: "...claro, dime", time: "10:25 AM" }
          ]
        },
        explanation: {
          text: "<p>T.J Miller pensó que estaba siendo educado: <em>saluda primero, pregunta después</em>. <strong>Pero ese \"hola\" solitario obliga a la otra persona a dejar lo que está haciendo y esperar</strong> una pregunta que nunca llega.</p>\n\n<p>La mayoría de las personas que hacen esto <strong>no pretenden hacer perder el tiempo a nadie</strong>. Es un reflejo: <em>\"Debería saludar antes de preguntar algo.\"</em></p>\n\n<p>Pero en conversaciones de texto, <strong>un \"hola\" sin continuación crea un silencio incómodo</strong>. Añade <strong>esperas innecesarias, cambios de contexto</strong>, y a veces incluso <em>ansiedad sobre qué vendrá después</em>.</p>\n\n<p>Lo mismo va para:</p>\n<ul>\n  <li>buenas</li>\n  <li>ey, ¿estás ahí?</li>\n  <li>hola, ¿tienes un minuto?</li>\n  <li>¿te puedo preguntar algo?</li>\n  <li>hola! *y luego nada durante 10 minutos*</li>\n</ul>\n\n<p><strong>¡Saluda y pregunta en el mismo mensaje!</strong></p>"
        }
      },
      doThis: {
        title: "✅ En su lugar, intenta esto",
        chat: {
          messages: [
            { name: "T.J Miller", text: "¡ey! pregunta rápida — ¿el entorno de staging está listo para pruebas de QA hoy?", time: "10:00 AM" },
            { name: "Thomas Middleditch", text: "¡hola! sí, lo desplegué esta mañana, ya puedes empezar a probar", time: "10:02 AM" },
            { name: "T.J Miller", text: "perfecto, me pongo con ello, ¡gracias!", time: "10:03 AM" }
          ]
        },
        explanation: {
          text: "<p><strong>Incluir tu pregunta de entrada no cuesta nada extra</strong>, pero permite que la otra persona responda de inmediato, aunque lo vea horas después.</p>\n\n<p>En lugar de solo \"hola\", intenta:</p>\n<ul>\n  <li>¡Ey! ¿Puedes revisar los logs del deploy de esta mañana?</li>\n  <li>Hola, cosita rápida — ¿tienes el enlace de la documentación del API?</li>\n  <li>¡Buenas! ¿La revisión de diseño sigue siendo a las 3?</li>\n  <li>Ey, necesito acceso a la DB de staging, ¿me echas una mano?</li>\n</ul>\n\n<p><strong>Saluda y pregunta de un tirón.</strong> Sigue siendo amable, y es <em>compatible con comunicación asíncrona</em>. La otra persona puede responder a su ritmo con todo el contexto que necesita.</p>\n\n<p>Cuando se hace bien, <strong>todos ahorran tiempo</strong>. 🎉</p>"
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
  nomessagesplitting: {
    en: {
      seo: {
        title: "Don't split one message into ten lines \u2014 ChatCrimes",
        description: "Please don't send each word as a separate message. Write your full thought in one message instead of spamming the chat.",
        slug: "no-message-splitting"
      },
      header: {
        title: "No message splitting",
        subtitle: "please don't split one thought into ten separate messages",
        animations: ["hey", "you there?", "so", "I was thinking", "about the thing", "nvm"]
      },
      intro: {
        text: "Imagine getting twelve notifications in a row, only to discover it was a single sentence chopped into tiny pieces... \ud83e\udd26\u200d\u2640\ufe0f"
      },
      dontDoThis: {
        title: "\u274c Don't do this",
        chat: {
          messages: [
            { name: "T.J Miller", text: "hey", time: "3:00 PM" },
            { name: "T.J Miller", text: "so", time: "3:00 PM" },
            { name: "T.J Miller", text: "I was thinking", time: "3:01 PM" },
            { name: "T.J Miller", text: "about the deploy", time: "3:01 PM" },
            { name: "T.J Miller", text: "can we push it to tomorrow?", time: "3:02 PM" },
            { name: "Thomas Middleditch", text: "you could have said all that in one message", time: "3:22 PM" }
          ]
        },
        explanation: {
          text: "<p>T.J Miller thought he was being conversational: <em>short messages, casual vibe</em>. <strong>But splitting one thought into six messages creates a wall of notifications</strong> that interrupts everyone in the channel.</p>\n\n<p>Most people who do this <strong>don't mean to spam</strong>. It's a reflex: <em>\"I'll just type as I think.\"</em></p>\n\n<p>But in text conversations, <strong>each message triggers a notification</strong>. Six messages means <strong>six interruptions, six pings</strong>, and the reader has to <em>piece together the whole thought like a puzzle</em>.</p>\n\n<p>The same goes for:</p>\n<ul>\n  <li>hey / you there? / so / about that thing</li>\n  <li>one word per line</li>\n  <li>stream-of-consciousness typing</li>\n  <li>hitting Enter after every three words</li>\n  <li>sending half a thought, then finishing it five messages later</li>\n</ul>\n\n<p><strong>One thought, one message!</strong></p>"
        }
      },
      doThis: {
        title: "\u2705 Instead, try this",
        chat: {
          messages: [
            { name: "T.J Miller", text: "hey! I was thinking about the deploy \u2014 can we push it to tomorrow? I want to run a few more tests first.", time: "3:00 PM" },
            { name: "Thomas Middleditch", text: "sure, tomorrow works. let me update the schedule.", time: "3:01 PM" },
            { name: "T.J Miller", text: "perfect, thanks!", time: "3:02 PM" }
          ]
        },
        explanation: {
          text: "<p><strong>Composing your full thought before hitting send takes a few extra seconds</strong>, but it gives the reader everything they need in one clean notification.</p>\n\n<p>Instead of message-per-word, try:</p>\n<ul>\n  <li>Write the full idea, then hit send once</li>\n  <li>Use Shift+Enter for line breaks inside one message</li>\n  <li>If it's long, write it in a doc and share the link</li>\n  <li>Re-read before sending \u2014 can two messages become one?</li>\n</ul>\n\n<p><strong>Fewer pings, clearer thinking.</strong> Your teammates will read a complete thought instead of watching a sentence arrive one word at a time.</p>\n\n<p>When done right, <strong>everyone stays focused</strong>. \ud83c\udf89</p>"
        }
      },
      footer: {
        paragraphs: [
          "This is kinda only half serious (kinda \ud83d\udc40) so please don't get mad at the person who sent you here.",
          "That said, if you see this site's URL as someone's status/bio, be prepared to be ignored if you only reply with \"?\".",
          "Inspired by the wonderful <a href=\"https://nohello.net\" target=\"_blank\" rel=\"noopener noreferrer\">nohello.net</a>. Avatars taken from Silicon Valley. Open-source on <a href=\"https://github.com/EsteveSegura/noquestionmark\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a>.",
          "Made by <a href=\"https://girlazo.com\" target=\"_blank\" rel=\"noopener noreferrer\">Esteve Segura</a>.",
          "This site is available in: <a href=\"/en\">English</a>, <a href=\"/es\">Espa\u00f1ol</a>"
        ]
      }
    },
    es: {
      seo: {
        title: "No partas un mensaje en diez l\u00edneas \u2014 ChatCrimes",
        description: "Por favor no mandes cada palabra como un mensaje separado. Escribe tu idea completa en un solo mensaje en lugar de inundar el chat.",
        slug: "no-message-splitting"
      },
      header: {
        title: "No message splitting",
        subtitle: "por favor no partas una idea en diez mensajes separados",
        animations: ["ey", "est\u00e1s?", "pues", "estaba pensando", "sobre lo del otro d\u00eda", "nada deja"]
      },
      intro: {
        text: "Imagina recibir doce notificaciones seguidas, solo para descubrir que era una sola frase cortada en pedacitos... \ud83e\udd26\u200d\u2640\ufe0f"
      },
      dontDoThis: {
        title: "\u274c No hagas esto",
        chat: {
          messages: [
            { name: "T.J Miller", text: "ey", time: "3:00 PM" },
            { name: "T.J Miller", text: "pues", time: "3:00 PM" },
            { name: "T.J Miller", text: "estaba pensando", time: "3:01 PM" },
            { name: "T.J Miller", text: "sobre el deploy", time: "3:01 PM" },
            { name: "T.J Miller", text: "\u00bflo pasamos a ma\u00f1ana?", time: "3:02 PM" },
            { name: "Thomas Middleditch", text: "podr\u00edas haber dicho todo eso en un solo mensaje", time: "3:22 PM" }
          ]
        },
        explanation: {
          text: "<p>T.J Miller pens\u00f3 que estaba siendo informal: <em>mensajes cortos, buen rollo</em>. <strong>Pero partir una idea en seis mensajes crea una avalancha de notificaciones</strong> que interrumpe a todos en el canal.</p>\n\n<p>La mayor\u00eda de las personas que hacen esto <strong>no pretenden hacer spam</strong>. Es un reflejo: <em>\"Voy escribiendo seg\u00fan pienso.\"</em></p>\n\n<p>Pero en conversaciones de texto, <strong>cada mensaje dispara una notificaci\u00f3n</strong>. Seis mensajes significan <strong>seis interrupciones, seis pings</strong>, y el lector tiene que <em>juntar las piezas como un puzle</em>.</p>\n\n<p>Lo mismo va para:</p>\n<ul>\n  <li>ey / est\u00e1s? / pues / sobre eso</li>\n  <li>una palabra por l\u00ednea</li>\n  <li>escribir en modo flujo de conciencia</li>\n  <li>pulsar Enter cada tres palabras</li>\n  <li>mandar media idea y terminarla cinco mensajes despu\u00e9s</li>\n</ul>\n\n<p><strong>\u00a1Una idea, un mensaje!</strong></p>"
        }
      },
      doThis: {
        title: "\u2705 En su lugar, intenta esto",
        chat: {
          messages: [
            { name: "T.J Miller", text: "\u00a1ey! estaba pensando en el deploy \u2014 \u00bflo pasamos a ma\u00f1ana? Quiero correr unas pruebas m\u00e1s primero.", time: "3:00 PM" },
            { name: "Thomas Middleditch", text: "claro, ma\u00f1ana va bien. actualizo el calendario.", time: "3:01 PM" },
            { name: "T.J Miller", text: "\u00a1perfecto, gracias!", time: "3:02 PM" }
          ]
        },
        explanation: {
          text: "<p><strong>Componer tu idea completa antes de darle a enviar toma unos segundos extra</strong>, pero le da al lector todo lo que necesita en una sola notificaci\u00f3n limpia.</p>\n\n<p>En lugar de un mensaje por palabra, intenta:</p>\n<ul>\n  <li>Escribe la idea completa y pulsa enviar una sola vez</li>\n  <li>Usa Shift+Enter para saltos de l\u00ednea dentro de un mensaje</li>\n  <li>Si es largo, escr\u00edbelo en un doc y comparte el enlace</li>\n  <li>Relee antes de enviar \u2014 \u00bfpueden dos mensajes ser uno?</li>\n</ul>\n\n<p><strong>Menos pings, ideas m\u00e1s claras.</strong> Tus compa\u00f1eros leer\u00e1n un pensamiento completo en vez de ver llegar una frase palabra a palabra.</p>\n\n<p>Cuando se hace bien, <strong>todos mantienen el foco</strong>. \ud83c\udf89</p>"
        }
      },
      footer: {
        paragraphs: [
          "Esto es solo medio en serio (medio \ud83d\udc40), as\u00ed que no te enojes con la persona que te envi\u00f3 aqu\u00ed.",
          "Dicho esto, si ves la URL de este sitio en el estado/bio de alguien, prep\u00e1rate para ser ignorado si solo respondes con \"?\".",
          "Inspirado en el maravilloso <a href=\"https://nohello.net\" target=\"_blank\" rel=\"noopener noreferrer\">nohello.net</a>. Avatares tomados de Silicon Valley. C\u00f3digo abierto en <a href=\"https://github.com/EsteveSegura/noquestionmark\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a>.",
          "Hecho por <a href=\"https://girlazo.com\" target=\"_blank\" rel=\"noopener noreferrer\">Esteve Segura</a>.",
          "Este sitio est\u00e1 disponible en: <a href=\"/en\">English</a>, <a href=\"/es\">Espa\u00f1ol</a>"
        ]
      }
    }
  }
}

export const defaultLanguage = 'en'
export const supportedLanguages = ['en', 'es']
