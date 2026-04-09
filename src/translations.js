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
          { url: "/no-message-splitting", text: "No message splitting - Don't split one thought into ten messages" },
          { url: "/just-ask", text: "Just ask - Don't ask to ask, just ask your question" },
          { url: "/no-unnecessary-mentions", text: "No unnecessary @mentions - Don't abuse @channel and @here" },
          { url: "/respect-time-zones", text: "Respect time zones - Don't message at 3 AM expecting a reply" },
          { url: "/no-dry-ok", text: "No dry ok - Don't reply \"ok\" to something that deserves more" },
          { url: "/no-passive-aggressive", text: "No passive-aggressive - Don't hide frustration behind polite phrases" },
          { url: "/no-ghost-deleting", text: "No ghost deleting - Don't silently delete messages after people read them" },
          { url: "/no-long-voice-notes", text: "No long voice notes - Don't send 5-minute voice notes when a sentence would do" },
          { url: "/no-voice-notes", text: "No voice notes - Don't send a voice note when the info should be text" }
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
          { url: "/no-message-splitting", text: "No message splitting - No partas una idea en diez mensajes" },
          { url: "/just-ask", text: "Just ask - No preguntes si puedes preguntar, pregunta directamente" },
          { url: "/no-unnecessary-mentions", text: "No unnecessary @mentions - No abuses de @channel y @here" },
          { url: "/respect-time-zones", text: "Respect time zones - No mandes mensajes a las 3 AM esperando respuesta" },
          { url: "/no-dry-ok", text: "No dry ok - No respondas \"ok\" a algo que merece m\u00e1s" },
          { url: "/no-passive-aggressive", text: "No passive-aggressive - No escondas tu frustraci\u00f3n detr\u00e1s de frases educadas" },
          { url: "/no-ghost-deleting", text: "No ghost deleting - No borres mensajes en silencio despu\u00e9s de que los lean" },
          { url: "/no-long-voice-notes", text: "No long voice notes - No mandes notas de voz de 5 minutos cuando basta una frase" },
          { url: "/no-voice-notes", text: "No voice notes - No mandes una nota de voz cuando la info deber\u00eda ser texto" }
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
  },
  justask: {
    en: {
      seo: {
        title: "Just ask your question \u2014 ChatCrimes",
        description: "Please don't ask to ask. Skip the \"can I ask you a question?\" and just ask your question directly.",
        slug: "just-ask"
      },
      header: {
        title: "Just ask",
        subtitle: "please don't ask to ask, just ask your question directly",
        animations: ["can I ask?", "got a sec?", "quick question", "you busy?", "can I bother you?", "one thing..."]
      },
      intro: {
        text: "Imagine someone walks up to you, asks \"can I ask you a question?\", and then waits for permission before saying anything useful... \ud83e\udd26\u200d\u2640\ufe0f"
      },
      dontDoThis: {
        title: "\u274c Don't do this",
        chat: {
          messages: [
            { name: "T.J Miller", text: "hey, can I ask you a question?", time: "1:00 PM" },
            { name: "Thomas Middleditch", text: "sure", time: "1:15 PM" },
            { name: "T.J Miller", text: "is the API docs repo public or private?", time: "1:16 PM" },
            { name: "Thomas Middleditch", text: "public. you could have just asked that directly", time: "1:35 PM" }
          ]
        },
        explanation: {
          text: "<p>T.J Miller thought he was being polite: <em>let me check if they have time first</em>. <strong>But asking to ask adds an entire unnecessary round trip</strong> that delays the actual conversation by minutes or hours.</p>\n\n<p>Most people who do this <strong>don't mean to waste anyone's time</strong>. It's a social habit: <em>\"I don't want to be rude, so I'll ask for permission first.\"</em></p>\n\n<p>But in async text conversations, <strong>each round trip can take ages</strong>. That \"sure\" might arrive <strong>15 minutes later</strong>, and by then you've lost momentum and the other person has context-switched twice for nothing.</p>\n\n<p>The same goes for:</p>\n<ul>\n  <li>can I ask you something?</li>\n  <li>got a second?</li>\n  <li>are you busy?</li>\n  <li>can I bother you for a sec?</li>\n  <li>I have a question...</li>\n</ul>\n\n<p><strong>Skip the preamble, just ask!</strong></p>"
        }
      },
      doThis: {
        title: "\u2705 Instead, try this",
        chat: {
          messages: [
            { name: "T.J Miller", text: "hey! quick one \u2014 is the API docs repo public or private?", time: "1:00 PM" },
            { name: "Thomas Middleditch", text: "public! here's the link: docs.example.com/api", time: "1:02 PM" },
            { name: "T.J Miller", text: "perfect, thanks!", time: "1:03 PM" }
          ]
        },
        explanation: {
          text: "<p><strong>Jumping straight to your question is still polite</strong> \u2014 and it lets the other person answer right away, even if they see the message hours later.</p>\n\n<p>Instead of asking to ask, try:</p>\n<ul>\n  <li>Hey! Is the staging env ready for testing?</li>\n  <li>Quick one \u2014 what's the password for the shared vault?</li>\n  <li>Hi! Do you know if the release is scheduled for today?</li>\n  <li>Hey, where can I find the onboarding doc?</li>\n</ul>\n\n<p><strong>Politeness is in the tone, not in the preamble.</strong> A friendly greeting plus your actual question is faster, kinder, and <em>async-friendly</em>.</p>\n\n<p>When done right, <strong>everyone saves a round trip</strong>. \ud83c\udf89</p>"
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
        title: "Pregunta directamente \u2014 ChatCrimes",
        description: "Por favor no preguntes si puedes preguntar. Salta el \"\u00bfte puedo hacer una pregunta?\" y ve directo al grano.",
        slug: "just-ask"
      },
      header: {
        title: "Just ask",
        subtitle: "por favor no preguntes si puedes preguntar, ve directo al grano",
        animations: ["\u00bfpuedo preguntar?", "\u00bftienes un seg?", "duda r\u00e1pida", "\u00bfest\u00e1s ocupado?", "\u00bfte molesto?", "una cosita..."]
      },
      intro: {
        text: "Imagina que alguien se acerca, te dice \"\u00bfte puedo hacer una pregunta?\", y se queda esperando permiso antes de decir algo \u00fatil... \ud83e\udd26\u200d\u2640\ufe0f"
      },
      dontDoThis: {
        title: "\u274c No hagas esto",
        chat: {
          messages: [
            { name: "T.J Miller", text: "ey, \u00bfte puedo hacer una pregunta?", time: "1:00 PM" },
            { name: "Thomas Middleditch", text: "claro", time: "1:15 PM" },
            { name: "T.J Miller", text: "\u00bfel repo de la documentaci\u00f3n del API es p\u00fablico o privado?", time: "1:16 PM" },
            { name: "Thomas Middleditch", text: "p\u00fablico. podr\u00edas haber preguntado eso directamente", time: "1:35 PM" }
          ]
        },
        explanation: {
          text: "<p>T.J Miller pens\u00f3 que estaba siendo educado: <em>deja que compruebe si tiene tiempo primero</em>. <strong>Pero preguntar si puedes preguntar a\u00f1ade un viaje de ida y vuelta completamente innecesario</strong> que retrasa la conversaci\u00f3n real minutos u horas.</p>\n\n<p>La mayor\u00eda de las personas que hacen esto <strong>no pretenden hacer perder el tiempo a nadie</strong>. Es un h\u00e1bito social: <em>\"No quiero ser maleducado, as\u00ed que pedir\u00e9 permiso primero.\"</em></p>\n\n<p>Pero en conversaciones as\u00edncronas de texto, <strong>cada ida y vuelta puede tardar una eternidad</strong>. Ese \"claro\" puede llegar <strong>15 minutos despu\u00e9s</strong>, y para entonces ya perdiste el hilo y la otra persona ha cambiado de contexto dos veces para nada.</p>\n\n<p>Lo mismo va para:</p>\n<ul>\n  <li>\u00bfte puedo preguntar algo?</li>\n  <li>\u00bftienes un segundo?</li>\n  <li>\u00bfest\u00e1s ocupado?</li>\n  <li>\u00bfte puedo molestar un momento?</li>\n  <li>tengo una pregunta...</li>\n</ul>\n\n<p><strong>\u00a1Salta el pre\u00e1mbulo y pregunta!</strong></p>"
        }
      },
      doThis: {
        title: "\u2705 En su lugar, intenta esto",
        chat: {
          messages: [
            { name: "T.J Miller", text: "\u00a1ey! cosita r\u00e1pida \u2014 \u00bfel repo de la documentaci\u00f3n del API es p\u00fablico o privado?", time: "1:00 PM" },
            { name: "Thomas Middleditch", text: "\u00a1p\u00fablico! aqu\u00ed tienes el enlace: docs.example.com/api", time: "1:02 PM" },
            { name: "T.J Miller", text: "\u00a1perfecto, gracias!", time: "1:03 PM" }
          ]
        },
        explanation: {
          text: "<p><strong>Ir directo a tu pregunta sigue siendo educado</strong> \u2014 y permite que la otra persona responda de inmediato, aunque vea el mensaje horas despu\u00e9s.</p>\n\n<p>En lugar de preguntar si puedes preguntar, intenta:</p>\n<ul>\n  <li>\u00a1Ey! \u00bfEl entorno de staging est\u00e1 listo para pruebas?</li>\n  <li>Cosita r\u00e1pida \u2014 \u00bfcu\u00e1l es la contrase\u00f1a del vault compartido?</li>\n  <li>\u00a1Hola! \u00bfSabes si la release est\u00e1 prevista para hoy?</li>\n  <li>Ey, \u00bfd\u00f3nde puedo encontrar el doc de onboarding?</li>\n</ul>\n\n<p><strong>La educaci\u00f3n est\u00e1 en el tono, no en el pre\u00e1mbulo.</strong> Un saludo amable junto a tu pregunta real es m\u00e1s r\u00e1pido, m\u00e1s amable, y <em>compatible con comunicaci\u00f3n as\u00edncrona</em>.</p>\n\n<p>Cuando se hace bien, <strong>todos se ahorran una ida y vuelta</strong>. \ud83c\udf89</p>"
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
  },
  nounnecessarymentions: {
    en: {
      seo: {
        title: "Stop abusing @channel and @here \u2014 ChatCrimes",
        description: "Please don't use @channel or @here unless it truly affects everyone. Learn why unnecessary mentions are a chat crime.",
        slug: "no-unnecessary-mentions"
      },
      header: {
        title: "No unnecessary @mentions",
        subtitle: "please don't use @channel or @here unless it truly affects everyone",
        animations: ["@channel", "@here", "@everyone", "@all", "@team", "@here !!"]
      },
      intro: {
        text: "Imagine 200 people getting a notification because someone needed to ask one person where to find a document... \ud83e\udd26\u200d\u2640\ufe0f"
      },
      dontDoThis: {
        title: "\u274c Don't do this",
        chat: {
          messages: [
            { name: "T.J Miller", text: "@channel does anyone know the WiFi password for the 3rd floor?", time: "9:00 AM" },
            { name: "Thomas Middleditch", text: "you just pinged 200 people for a WiFi password", time: "9:20 AM" },
            { name: "T.J Miller", text: "@here sorry, but does anyone know?", time: "9:21 AM" },
            { name: "Thomas Middleditch", text: "you did it again", time: "9:40 AM" }
          ]
        },
        explanation: {
          text: "<p>T.J Miller thought he was casting a wide net: <em>someone here must know</em>. <strong>But @channel and @here notify every single person in the channel</strong>, pulling them out of focus for something that could have been a simple search or a direct message.</p>\n\n<p>Most people who do this <strong>don't realize the blast radius</strong>. It's a reflex: <em>\"I need an answer fast, so I'll ping everyone.\"</em></p>\n\n<p>But in large channels, <strong>unnecessary mentions create notification fatigue</strong>. People start <strong>muting channels, ignoring real alerts</strong>, and the signal-to-noise ratio collapses.</p>\n\n<p>The same goes for:</p>\n<ul>\n  <li>@channel for non-urgent questions</li>\n  <li>@here for things that can wait</li>\n  <li>@everyone for team-specific topics</li>\n  <li>@channel followed by @here when nobody answers</li>\n  <li>@channel in a 500-person channel for a yes/no question</li>\n</ul>\n\n<p><strong>Not everything is an emergency!</strong></p>"
        }
      },
      doThis: {
        title: "\u2705 Instead, try this",
        chat: {
          messages: [
            { name: "T.J Miller", text: "hey! does anyone know the WiFi password for the 3rd floor? No rush", time: "9:00 AM" },
            { name: "Thomas Middleditch", text: "it's on the IT wiki, but it's FloorThree2024", time: "9:02 AM" },
            { name: "T.J Miller", text: "perfect, found the wiki too. thanks!", time: "9:03 AM" },
            { name: "Thomas Middleditch", text: "no problem, that page has all the passwords", time: "9:04 AM" }
          ]
        },
        explanation: {
          text: "<p><strong>Asking without a mass mention still gets answers</strong> \u2014 and it doesn't interrupt everyone who has notifications on.</p>\n\n<p>Before reaching for @channel, try:</p>\n<ul>\n  <li>Post without a mention \u2014 people still read the channel</li>\n  <li>Search the channel history or wiki first</li>\n  <li>DM someone who likely knows the answer</li>\n  <li>Use @here only for time-sensitive items that affect everyone online</li>\n</ul>\n\n<p><strong>Reserve @channel for real emergencies.</strong> When it's used sparingly, people actually pay attention to it. When it's used for WiFi passwords, people mute the channel.</p>\n\n<p>When done right, <strong>notifications mean something</strong>. \ud83c\udf89</p>"
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
        title: "Deja de abusar de @channel y @here \u2014 ChatCrimes",
        description: "Por favor no uses @channel o @here a menos que realmente afecte a todos. Aprende por qu\u00e9 las menciones innecesarias son un crimen de chat.",
        slug: "no-unnecessary-mentions"
      },
      header: {
        title: "No unnecessary @mentions",
        subtitle: "por favor no uses @channel o @here a menos que realmente afecte a todos",
        animations: ["@channel", "@here", "@everyone", "@todos", "@equipo", "@here !!"]
      },
      intro: {
        text: "Imagina que 200 personas reciben una notificaci\u00f3n porque alguien necesitaba preguntarle a una sola persona d\u00f3nde encontrar un documento... \ud83e\udd26\u200d\u2640\ufe0f"
      },
      dontDoThis: {
        title: "\u274c No hagas esto",
        chat: {
          messages: [
            { name: "T.J Miller", text: "@channel \u00bfalguien sabe la contrase\u00f1a del WiFi del 3er piso?", time: "9:00 AM" },
            { name: "Thomas Middleditch", text: "acabas de notificar a 200 personas por una contrase\u00f1a de WiFi", time: "9:20 AM" },
            { name: "T.J Miller", text: "@here perd\u00f3n, pero \u00bfalguien sabe?", time: "9:21 AM" },
            { name: "Thomas Middleditch", text: "lo acabas de hacer otra vez", time: "9:40 AM" }
          ]
        },
        explanation: {
          text: "<p>T.J Miller pens\u00f3 que estaba lanzando una red amplia: <em>alguien aqu\u00ed tiene que saber</em>. <strong>Pero @channel y @here notifican a todas las personas del canal</strong>, sac\u00e1ndolas de su concentraci\u00f3n por algo que podr\u00eda haberse resuelto con una b\u00fasqueda o un mensaje directo.</p>\n\n<p>La mayor\u00eda de las personas que hacen esto <strong>no se dan cuenta del radio de explosi\u00f3n</strong>. Es un reflejo: <em>\"Necesito una respuesta r\u00e1pida, as\u00ed que notificar\u00e9 a todos.\"</em></p>\n\n<p>Pero en canales grandes, <strong>las menciones innecesarias crean fatiga de notificaciones</strong>. La gente empieza a <strong>silenciar canales, ignorar alertas reales</strong>, y la relaci\u00f3n se\u00f1al-ruido se desploma.</p>\n\n<p>Lo mismo va para:</p>\n<ul>\n  <li>@channel para preguntas no urgentes</li>\n  <li>@here para cosas que pueden esperar</li>\n  <li>@everyone para temas de un equipo espec\u00edfico</li>\n  <li>@channel seguido de @here cuando nadie responde</li>\n  <li>@channel en un canal de 500 personas para una pregunta de s\u00ed/no</li>\n</ul>\n\n<p><strong>\u00a1No todo es una emergencia!</strong></p>"
        }
      },
      doThis: {
        title: "\u2705 En su lugar, intenta esto",
        chat: {
          messages: [
            { name: "T.J Miller", text: "\u00a1ey! \u00bfalguien sabe la contrase\u00f1a del WiFi del 3er piso? Sin prisa", time: "9:00 AM" },
            { name: "Thomas Middleditch", text: "est\u00e1 en la wiki de IT, pero es FloorThree2024", time: "9:02 AM" },
            { name: "T.J Miller", text: "perfecto, encontr\u00e9 la wiki tambi\u00e9n. \u00a1gracias!", time: "9:03 AM" },
            { name: "Thomas Middleditch", text: "de nada, esa p\u00e1gina tiene todas las contrase\u00f1as", time: "9:04 AM" }
          ]
        },
        explanation: {
          text: "<p><strong>Preguntar sin una menci\u00f3n masiva sigue consiguiendo respuestas</strong> \u2014 y no interrumpe a todos los que tienen notificaciones activadas.</p>\n\n<p>Antes de recurrir a @channel, intenta:</p>\n<ul>\n  <li>Publica sin menci\u00f3n \u2014 la gente sigue leyendo el canal</li>\n  <li>Busca primero en el historial del canal o en la wiki</li>\n  <li>Manda un DM a alguien que probablemente sepa la respuesta</li>\n  <li>Usa @here solo para cosas urgentes que afecten a todos los conectados</li>\n</ul>\n\n<p><strong>Reserva @channel para emergencias reales.</strong> Cuando se usa con moderaci\u00f3n, la gente le presta atenci\u00f3n. Cuando se usa para contrase\u00f1as de WiFi, la gente silencia el canal.</p>\n\n<p>Cuando se hace bien, <strong>las notificaciones significan algo</strong>. \ud83c\udf89</p>"
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
  },
  respecttimezones: {
    en: {
      seo: {
        title: "Respect time zones before messaging \u2014 ChatCrimes",
        description: "Please don't send messages at 3 AM expecting an immediate reply. Respect your teammates' time zones and working hours.",
        slug: "respect-time-zones"
      },
      header: {
        title: "Respect time zones",
        subtitle: "please don't message at 3 AM expecting an immediate reply",
        animations: ["3:47 AM", "urgent!!!", "you up?", "need this NOW", "why no reply?", "hello???"]
      },
      intro: {
        text: "Imagine waking up to 14 messages sent at 3 AM, each one more desperate than the last, all because someone forgot time zones exist... \ud83e\udd26\u200d\u2640\ufe0f"
      },
      dontDoThis: {
        title: "\u274c Don't do this",
        chat: {
          messages: [
            { name: "T.J Miller", text: "hey, I need the staging credentials ASAP", time: "3:12 AM" },
            { name: "T.J Miller", text: "hello?", time: "3:30 AM" },
            { name: "T.J Miller", text: "are you ignoring me?", time: "3:47 AM" },
            { name: "Thomas Middleditch", text: "it's 3 AM here. I was sleeping.", time: "7:01 AM" }
          ]
        },
        explanation: {
          text: "<p>T.J Miller needed something urgently: <em>this can't wait, let me ping them now</em>. <strong>But sending a flurry of messages at 3 AM doesn't speed things up</strong> \u2014 it just guarantees the other person wakes up to stress and resentment.</p>\n\n<p>Most people who do this <strong>don't mean to be inconsiderate</strong>. It's a blind spot: <em>\"It's afternoon for me, so I forget it's the middle of the night for them.\"</em></p>\n\n<p>But in distributed teams, <strong>ignoring time zones erodes trust</strong>. It creates <strong>pressure to be always-on, anxiety about missing messages</strong>, and makes people dread opening their chat app in the morning.</p>\n\n<p>The same goes for:</p>\n<ul>\n  <li>Follow-up messages when someone hasn't replied in minutes (at night)</li>\n  <li>Marking everything as urgent regardless of the hour</li>\n  <li>Expecting instant replies from people in different continents</li>\n  <li>Sending \"hello???\" at 4 AM because you didn't get a response</li>\n  <li>Scheduling calls without checking the other person's timezone</li>\n</ul>\n\n<p><strong>Their 3 AM is not your 3 PM!</strong></p>"
        }
      },
      doThis: {
        title: "\u2705 Instead, try this",
        chat: {
          messages: [
            { name: "T.J Miller", text: "hey! when you're online \u2014 I need the staging credentials. no rush, tomorrow morning your time is fine", time: "3:12 AM" },
            { name: "Thomas Middleditch", text: "morning! just sent them to the shared vault. all set", time: "8:02 AM" },
            { name: "T.J Miller", text: "perfect, got them. thanks!", time: "8:05 AM" }
          ]
        },
        explanation: {
          text: "<p><strong>One clear message with no urgency pressure lets the other person respond on their own schedule</strong> \u2014 and they'll actually want to help instead of feeling ambushed.</p>\n\n<p>When messaging across time zones, try:</p>\n<ul>\n  <li>Send one message with full context, then wait</li>\n  <li>Add \"no rush\" or \"whenever you're online\" to set expectations</li>\n  <li>Use scheduled messages to deliver during their working hours</li>\n  <li>Check a world clock before following up</li>\n</ul>\n\n<p><strong>Async means trust, not silence.</strong> A well-written message at 3 AM that says \"no rush\" is respectful. Three follow-ups demanding a reply is not.</p>\n\n<p>When done right, <strong>everyone sleeps in peace</strong>. \ud83c\udf89</p>"
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
        title: "Respeta las zonas horarias antes de escribir \u2014 ChatCrimes",
        description: "Por favor no mandes mensajes a las 3 AM esperando respuesta inmediata. Respeta las zonas horarias y el horario laboral de tus compa\u00f1eros.",
        slug: "respect-time-zones"
      },
      header: {
        title: "Respect time zones",
        subtitle: "por favor no mandes mensajes a las 3 AM esperando respuesta inmediata",
        animations: ["3:47 AM", "\u00a1\u00a1urgente!!", "\u00bfest\u00e1s?", "lo necesito YA", "\u00bfpor qu\u00e9 no contestas?", "hola???"]
      },
      intro: {
        text: "Imagina despertarte con 14 mensajes enviados a las 3 AM, cada uno m\u00e1s desesperado que el anterior, todo porque alguien olvid\u00f3 que las zonas horarias existen... \ud83e\udd26\u200d\u2640\ufe0f"
      },
      dontDoThis: {
        title: "\u274c No hagas esto",
        chat: {
          messages: [
            { name: "T.J Miller", text: "ey, necesito las credenciales de staging YA", time: "3:12 AM" },
            { name: "T.J Miller", text: "\u00bfhola?", time: "3:30 AM" },
            { name: "T.J Miller", text: "\u00bfme est\u00e1s ignorando?", time: "3:47 AM" },
            { name: "Thomas Middleditch", text: "son las 3 AM aqu\u00ed. estaba durmiendo.", time: "7:01 AM" }
          ]
        },
        explanation: {
          text: "<p>T.J Miller necesitaba algo urgente: <em>esto no puede esperar, le escribo ahora</em>. <strong>Pero enviar una ráfaga de mensajes a las 3 AM no acelera nada</strong> \u2014 solo garantiza que la otra persona se despierte con estr\u00e9s y resentimiento.</p>\n\n<p>La mayor\u00eda de las personas que hacen esto <strong>no pretenden ser desconsideradas</strong>. Es un punto ciego: <em>\"Para m\u00ed es por la tarde, as\u00ed que olvido que para ellos es madrugada.\"</em></p>\n\n<p>Pero en equipos distribuidos, <strong>ignorar las zonas horarias erosiona la confianza</strong>. Crea <strong>presi\u00f3n por estar siempre disponible, ansiedad por mensajes perdidos</strong>, y hace que la gente tema abrir el chat por la ma\u00f1ana.</p>\n\n<p>Lo mismo va para:</p>\n<ul>\n  <li>Mensajes de seguimiento cuando alguien no responde en minutos (de noche)</li>\n  <li>Marcar todo como urgente sin importar la hora</li>\n  <li>Esperar respuestas instant\u00e1neas de personas en otros continentes</li>\n  <li>Enviar \"hola???\" a las 4 AM porque no obtuviste respuesta</li>\n  <li>Agendar reuniones sin verificar la zona horaria del otro</li>\n</ul>\n\n<p><strong>\u00a1Sus 3 AM no son tus 3 PM!</strong></p>"
        }
      },
      doThis: {
        title: "\u2705 En su lugar, intenta esto",
        chat: {
          messages: [
            { name: "T.J Miller", text: "\u00a1ey! cuando est\u00e9s conectado \u2014 necesito las credenciales de staging. sin prisa, ma\u00f1ana a tu hora est\u00e1 bien", time: "3:12 AM" },
            { name: "Thomas Middleditch", text: "\u00a1buenos d\u00edas! acabo de dejarlas en el vault compartido. listo", time: "8:02 AM" },
            { name: "T.J Miller", text: "perfecto, ya las tengo. \u00a1gracias!", time: "8:05 AM" }
          ]
        },
        explanation: {
          text: "<p><strong>Un mensaje claro sin presi\u00f3n de urgencia permite que la otra persona responda a su ritmo</strong> \u2014 y tendr\u00e1 ganas de ayudar en vez de sentirse emboscada.</p>\n\n<p>Cuando escribas a trav\u00e9s de zonas horarias, intenta:</p>\n<ul>\n  <li>Env\u00eda un solo mensaje con todo el contexto y espera</li>\n  <li>A\u00f1ade \"sin prisa\" o \"cuando est\u00e9s online\" para fijar expectativas</li>\n  <li>Usa mensajes programados para que lleguen en su horario laboral</li>\n  <li>Consulta un reloj mundial antes de hacer seguimiento</li>\n</ul>\n\n<p><strong>As\u00edncrono significa confianza, no silencio.</strong> Un mensaje bien escrito a las 3 AM que diga \"sin prisa\" es respetuoso. Tres seguimientos exigiendo respuesta no lo es.</p>\n\n<p>Cuando se hace bien, <strong>todos duermen en paz</strong>. \ud83c\udf89</p>"
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
  },
  nodryok: {
    en: {
      seo: {
        title: "Don't reply \"ok\" to something complex \u2014 ChatCrimes",
        description: "Please don't reply with just 'ok' or 'k' to a detailed message. Acknowledge what was said and confirm what you'll do.",
        slug: "no-dry-ok"
      },
      header: {
        title: "No dry ok",
        subtitle: "please don't reply with just \"ok\" to something that deserves more",
        animations: ["ok", "k", "got it", "noted", "\ud83d\udc4d", "sure"]
      },
      intro: {
        text: "Imagine spending five minutes writing a detailed plan, and the only response you get is \"ok\"... \ud83e\udd26\u200d\u2640\ufe0f"
      },
      dontDoThis: {
        title: "\u274c Don't do this",
        chat: {
          messages: [
            { name: "T.J Miller", text: "hey, so for the release: I'll handle the migration scripts, you take care of the rollback plan, and we deploy Friday at 2 PM after QA signs off. Sound good?", time: "10:00 AM" },
            { name: "Thomas Middleditch", text: "ok", time: "10:25 AM" },
            { name: "T.J Miller", text: "ok as in you'll do the rollback plan? or ok you read it?", time: "10:26 AM" },
            { name: "Thomas Middleditch", text: "yes", time: "10:50 AM" }
          ]
        },
        explanation: {
          text: "<p>Thomas Middleditch thought he was being efficient: <em>short reply, message received</em>. <strong>But \"ok\" to a multi-part message leaves the other person guessing</strong> what exactly was acknowledged and what was agreed to.</p>\n\n<p>Most people who do this <strong>don't mean to be dismissive</strong>. It's a reflex: <em>\"I read it, so I'll confirm with the shortest possible reply.\"</em></p>\n\n<p>But when someone writes a detailed plan, <strong>a dry \"ok\" feels like it wasn't read at all</strong>. It creates <strong>ambiguity, frustration</strong>, and often forces a <em>follow-up message just to confirm what \"ok\" meant</em>.</p>\n\n<p>The same goes for:</p>\n<ul>\n  <li>k</li>\n  <li>got it</li>\n  <li>noted</li>\n  <li>sure</li>\n  <li>\ud83d\udc4d (as the entire reply)</li>\n</ul>\n\n<p><strong>Match the effort of the message!</strong></p>"
        }
      },
      doThis: {
        title: "\u2705 Instead, try this",
        chat: {
          messages: [
            { name: "T.J Miller", text: "hey, so for the release: I'll handle the migration scripts, you take care of the rollback plan, and we deploy Friday at 2 PM after QA signs off. Sound good?", time: "10:00 AM" },
            { name: "Thomas Middleditch", text: "sounds good! I'll have the rollback plan ready by Thursday EOD. Friday 2 PM works for me", time: "10:02 AM" },
            { name: "T.J Miller", text: "perfect, I'll share the migration scripts for review Thursday morning", time: "10:03 AM" },
            { name: "Thomas Middleditch", text: "great, let's sync briefly before the deploy", time: "10:04 AM" }
          ]
        },
        explanation: {
          text: "<p><strong>Echoing back the key points takes ten extra seconds</strong> \u2014 and it confirms that everyone is aligned, not just that someone saw the message.</p>\n\n<p>Instead of a dry \"ok\", try:</p>\n<ul>\n  <li>Confirm your part: \"I'll handle X by Thursday\"</li>\n  <li>Acknowledge the plan: \"Friday 2 PM works for me\"</li>\n  <li>Add something: \"Sounds good, let's sync before the deploy\"</li>\n  <li>Ask if unclear: \"Got it \u2014 one question: who's running QA?\"</li>\n</ul>\n\n<p><strong>Effort in, effort out.</strong> When someone writes a thoughtful message, a thoughtful reply shows you actually read it. That builds trust.</p>\n\n<p>When done right, <strong>everyone knows the plan</strong>. \ud83c\udf89</p>"
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
        title: "No respondas \"ok\" a algo complejo \u2014 ChatCrimes",
        description: "Por favor no respondas solo con 'ok' o 'k' a un mensaje detallado. Confirma qu\u00e9 entendiste y qu\u00e9 vas a hacer.",
        slug: "no-dry-ok"
      },
      header: {
        title: "No dry ok",
        subtitle: "por favor no respondas solo \"ok\" a algo que merece m\u00e1s",
        animations: ["ok", "k", "enterado", "anotado", "\ud83d\udc4d", "dale"]
      },
      intro: {
        text: "Imagina dedicar cinco minutos a escribir un plan detallado, y que la \u00fanica respuesta que recibas sea \"ok\"... \ud83e\udd26\u200d\u2640\ufe0f"
      },
      dontDoThis: {
        title: "\u274c No hagas esto",
        chat: {
          messages: [
            { name: "T.J Miller", text: "ey, para la release: yo me encargo de los scripts de migraci\u00f3n, t\u00fa del plan de rollback, y desplegamos el viernes a las 2 PM despu\u00e9s de que QA d\u00e9 el visto bueno. \u00bfTe parece?", time: "10:00 AM" },
            { name: "Thomas Middleditch", text: "ok", time: "10:25 AM" },
            { name: "T.J Miller", text: "\u00bfok de que har\u00e1s el plan de rollback? \u00bfo ok de que lo le\u00edste?", time: "10:26 AM" },
            { name: "Thomas Middleditch", text: "s\u00ed", time: "10:50 AM" }
          ]
        },
        explanation: {
          text: "<p>Thomas Middleditch pens\u00f3 que estaba siendo eficiente: <em>respuesta corta, mensaje recibido</em>. <strong>Pero un \"ok\" a un mensaje con varias partes deja a la otra persona adivinando</strong> qu\u00e9 exactamente se entendi\u00f3 y qu\u00e9 se acord\u00f3.</p>\n\n<p>La mayor\u00eda de las personas que hacen esto <strong>no pretenden ser despectivas</strong>. Es un reflejo: <em>\"Lo le\u00ed, as\u00ed que confirmo con la respuesta m\u00e1s corta posible.\"</em></p>\n\n<p>Pero cuando alguien escribe un plan detallado, <strong>un \"ok\" seco se siente como si no se hubiera le\u00eddo</strong>. Genera <strong>ambig\u00fcedad, frustraci\u00f3n</strong>, y a menudo obliga a un <em>mensaje de seguimiento solo para confirmar qu\u00e9 significaba \"ok\"</em>.</p>\n\n<p>Lo mismo va para:</p>\n<ul>\n  <li>k</li>\n  <li>enterado</li>\n  <li>anotado</li>\n  <li>dale</li>\n  <li>\ud83d\udc4d (como \u00fanica respuesta)</li>\n</ul>\n\n<p><strong>\u00a1Iguala el esfuerzo del mensaje!</strong></p>"
        }
      },
      doThis: {
        title: "\u2705 En su lugar, intenta esto",
        chat: {
          messages: [
            { name: "T.J Miller", text: "ey, para la release: yo me encargo de los scripts de migraci\u00f3n, t\u00fa del plan de rollback, y desplegamos el viernes a las 2 PM despu\u00e9s de que QA d\u00e9 el visto bueno. \u00bfTe parece?", time: "10:00 AM" },
            { name: "Thomas Middleditch", text: "\u00a1hecho! tendr\u00e9 el plan de rollback listo para el jueves al final del d\u00eda. El viernes a las 2 PM me va bien", time: "10:02 AM" },
            { name: "T.J Miller", text: "perfecto, comparto los scripts de migraci\u00f3n para revisi\u00f3n el jueves por la ma\u00f1ana", time: "10:03 AM" },
            { name: "Thomas Middleditch", text: "genial, hacemos un sync r\u00e1pido antes del deploy", time: "10:04 AM" }
          ]
        },
        explanation: {
          text: "<p><strong>Repetir los puntos clave toma diez segundos extra</strong> \u2014 y confirma que todos est\u00e1n alineados, no solo que alguien vio el mensaje.</p>\n\n<p>En lugar de un \"ok\" seco, intenta:</p>\n<ul>\n  <li>Confirma tu parte: \"Me encargo de X para el jueves\"</li>\n  <li>Reconoce el plan: \"El viernes a las 2 PM me va bien\"</li>\n  <li>A\u00f1ade algo: \"Perfecto, hagamos sync antes del deploy\"</li>\n  <li>Pregunta si no est\u00e1 claro: \"Entendido \u2014 una duda: \u00bfqui\u00e9n hace QA?\"</li>\n</ul>\n\n<p><strong>Esfuerzo que entra, esfuerzo que sale.</strong> Cuando alguien escribe un mensaje pensado, una respuesta pensada demuestra que lo le\u00edste. Eso genera confianza.</p>\n\n<p>Cuando se hace bien, <strong>todos conocen el plan</strong>. \ud83c\udf89</p>"
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
  },
  nopassiveaggressive: {
    en: {
      seo: {
        title: "Stop being passive-aggressive in chat \u2014 ChatCrimes",
        description: "Please don't use phrases like 'as per my last message' or 'as I already said' in chat. Be direct, not passive-aggressive.",
        slug: "no-passive-aggressive"
      },
      header: {
        title: "No passive-aggressive",
        subtitle: "please don't hide frustration behind polite-sounding phrases",
        animations: ["per my last msg", "as I said", "gentle reminder", "just circling back", "as mentioned", "not sure if you saw"]
      },
      intro: {
        text: "Imagine reading a message that sounds polite on the surface but is clearly dripping with barely contained irritation... \ud83e\udd26\u200d\u2640\ufe0f"
      },
      dontDoThis: {
        title: "\u274c Don't do this",
        chat: {
          messages: [
            { name: "T.J Miller", text: "hey, any update on the deploy?", time: "2:00 PM" },
            { name: "Thomas Middleditch", text: "as per my last message, the deploy is scheduled for Friday", time: "2:20 PM" },
            { name: "T.J Miller", text: "right, but is it confirmed?", time: "2:21 PM" },
            { name: "Thomas Middleditch", text: "as I already mentioned, yes. it's confirmed.", time: "2:45 PM" }
          ]
        },
        explanation: {
          text: "<p>Thomas Middleditch thought he was being professional: <em>I already answered this, let me reference my previous message</em>. <strong>But phrases like \"as per my last message\" are universally read as passive-aggressive</strong>, even if that wasn't the intention.</p>\n\n<p>Most people who do this <strong>don't think they're being rude</strong>. It feels like a polite redirect: <em>\"I'm just pointing them to what I already said.\"</em></p>\n\n<p>But in text, <strong>tone is easily lost and these phrases carry a sharp subtext</strong>: <em>you should have read what I wrote</em>. They create <strong>tension, defensiveness</strong>, and make people <em>dread asking follow-up questions</em>.</p>\n\n<p>The same goes for:</p>\n<ul>\n  <li>As I already mentioned...</li>\n  <li>Per my previous email...</li>\n  <li>Just a gentle reminder (that's not gentle at all)</li>\n  <li>Not sure if you saw my last message...</li>\n  <li>Circling back on this (for the third time)</li>\n</ul>\n\n<p><strong>Say what you mean, kindly!</strong></p>"
        }
      },
      doThis: {
        title: "\u2705 Instead, try this",
        chat: {
          messages: [
            { name: "T.J Miller", text: "hey, any update on the deploy?", time: "2:00 PM" },
            { name: "Thomas Middleditch", text: "yep! still on track for Friday. I'll ping the channel once it's live", time: "2:02 PM" },
            { name: "T.J Miller", text: "great, thanks for confirming!", time: "2:03 PM" },
            { name: "Thomas Middleditch", text: "no problem, I'll keep you posted", time: "2:04 PM" }
          ]
        },
        explanation: {
          text: "<p><strong>Repeating the answer without the sarcastic wrapper takes the same effort</strong> \u2014 and it keeps the conversation friendly instead of adversarial.</p>\n\n<p>Instead of passive-aggressive callbacks, try:</p>\n<ul>\n  <li>Just re-state the answer briefly and move on</li>\n  <li>Add new info: \"still Friday, I'll ping when it's live\"</li>\n  <li>If it's truly urgent, link the original message directly</li>\n  <li>If you're frustrated, take a breath before typing</li>\n</ul>\n\n<p><strong>Direct beats diplomatic-but-mean.</strong> People remember how your messages made them feel. A curt \"as I said\" lingers far longer than a friendly re-confirmation.</p>\n\n<p>When done right, <strong>everyone stays on the same team</strong>. \ud83c\udf89</p>"
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
        title: "Deja de ser pasivo-agresivo en el chat \u2014 ChatCrimes",
        description: "Por favor no uses frases como 'como ya dije' o 'seg\u00fan mi \u00faltimo mensaje' en el chat. S\u00e9 directo, no pasivo-agresivo.",
        slug: "no-passive-aggressive"
      },
      header: {
        title: "No passive-aggressive",
        subtitle: "por favor no escondas tu frustraci\u00f3n detr\u00e1s de frases que suenan educadas",
        animations: ["como ya dije", "seg\u00fan mi msg", "recordatorio amable", "vuelvo a insistir", "como mencion\u00e9", "no s\u00e9 si lo viste"]
      },
      intro: {
        text: "Imagina leer un mensaje que suena educado en la superficie pero que claramente destila una irritaci\u00f3n apenas contenida... \ud83e\udd26\u200d\u2640\ufe0f"
      },
      dontDoThis: {
        title: "\u274c No hagas esto",
        chat: {
          messages: [
            { name: "T.J Miller", text: "ey, \u00bfalguna novedad sobre el deploy?", time: "2:00 PM" },
            { name: "Thomas Middleditch", text: "como ya dije en mi \u00faltimo mensaje, el deploy est\u00e1 programado para el viernes", time: "2:20 PM" },
            { name: "T.J Miller", text: "ya, pero \u00bfest\u00e1 confirmado?", time: "2:21 PM" },
            { name: "Thomas Middleditch", text: "como ya mencion\u00e9, s\u00ed. est\u00e1 confirmado.", time: "2:45 PM" }
          ]
        },
        explanation: {
          text: "<p>Thomas Middleditch pens\u00f3 que estaba siendo profesional: <em>ya respond\u00ed esto, d\u00e9jame referenciar mi mensaje anterior</em>. <strong>Pero frases como \"como ya dije\" se leen universalmente como pasivo-agresivas</strong>, aunque esa no fuera la intenci\u00f3n.</p>\n\n<p>La mayor\u00eda de las personas que hacen esto <strong>no creen estar siendo maleducadas</strong>. Se siente como una redirecci\u00f3n educada: <em>\"Solo les se\u00f1alo lo que ya escrib\u00ed.\"</em></p>\n\n<p>Pero en texto, <strong>el tono se pierde f\u00e1cilmente y estas frases llevan un subtexto afilado</strong>: <em>deber\u00edas haber le\u00eddo lo que escrib\u00ed</em>. Generan <strong>tensi\u00f3n, actitud defensiva</strong>, y hacen que la gente <em>tema hacer preguntas de seguimiento</em>.</p>\n\n<p>Lo mismo va para:</p>\n<ul>\n  <li>Como ya mencion\u00e9...</li>\n  <li>Seg\u00fan mi mensaje anterior...</li>\n  <li>Solo un recordatorio amable (que no tiene nada de amable)</li>\n  <li>No s\u00e9 si viste mi \u00faltimo mensaje...</li>\n  <li>Vuelvo a insistir sobre esto (por tercera vez)</li>\n</ul>\n\n<p><strong>\u00a1Di lo que quieres decir, con amabilidad!</strong></p>"
        }
      },
      doThis: {
        title: "\u2705 En su lugar, intenta esto",
        chat: {
          messages: [
            { name: "T.J Miller", text: "ey, \u00bfalguna novedad sobre el deploy?", time: "2:00 PM" },
            { name: "Thomas Middleditch", text: "\u00a1s\u00ed! sigue en pie para el viernes. Aviso por el canal cuando est\u00e9 en producci\u00f3n", time: "2:02 PM" },
            { name: "T.J Miller", text: "\u00a1genial, gracias por confirmar!", time: "2:03 PM" },
            { name: "Thomas Middleditch", text: "de nada, te mantengo al tanto", time: "2:04 PM" }
          ]
        },
        explanation: {
          text: "<p><strong>Repetir la respuesta sin el envoltorio sarc\u00e1stico cuesta lo mismo</strong> \u2014 y mantiene la conversaci\u00f3n amistosa en vez de convertirla en una batalla.</p>\n\n<p>En lugar de referencias pasivo-agresivas, intenta:</p>\n<ul>\n  <li>Simplemente repite la respuesta brevemente y sigue adelante</li>\n  <li>A\u00f1ade info nueva: \"sigue el viernes, aviso cuando est\u00e9 en producci\u00f3n\"</li>\n  <li>Si es realmente urgente, enlaza el mensaje original directamente</li>\n  <li>Si est\u00e1s frustrado, respira antes de escribir</li>\n</ul>\n\n<p><strong>Directo le gana a diplom\u00e1tico-pero-cruel.</strong> La gente recuerda c\u00f3mo le hicieron sentir tus mensajes. Un seco \"como ya dije\" perdura mucho m\u00e1s que una reconfirmaci\u00f3n amable.</p>\n\n<p>Cuando se hace bien, <strong>todos siguen en el mismo equipo</strong>. \ud83c\udf89</p>"
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
  },
  noghostdeleting: {
    en: {
      seo: {
        title: "Don't delete messages without warning \u2014 ChatCrimes",
        description: "Please don't silently delete messages in chat. If you made a mistake, correct it openly instead of making it vanish.",
        slug: "no-ghost-deleting"
      },
      header: {
        title: "No ghost deleting",
        subtitle: "please don't silently delete messages after people have read them",
        animations: ["*deleted*", "wait what?", "where did it go?", "I swear it said...", "was I dreaming?", "gone."]
      },
      intro: {
        text: "Imagine reading a message, looking away for a second, and when you look back it's gone \u2014 like it never existed... \ud83e\udd26\u200d\u2640\ufe0f"
      },
      dontDoThis: {
        title: "\u274c Don't do this",
        chat: {
          messages: [
            { name: "T.J Miller", text: "hey, the client said they want to cancel the project entirely", time: "11:00 AM" },
            { name: "Thomas Middleditch", text: "wait, what? are you serious?", time: "11:02 AM" },
            { name: "T.J Miller", text: "hey, the client said they want to cancel the project entirely", time: "11:00 AM", deleted: true },
            { name: "Thomas Middleditch", text: "why did you delete that? I already read it", time: "11:15 AM" }
          ]
        },
        explanation: {
          text: "<p>T.J Miller realized he shared something prematurely: <em>let me just delete it before anyone notices</em>. <strong>But people already read it, and deleting the message doesn't erase their memory</strong> \u2014 it just adds confusion and suspicion.</p>\n\n<p>Most people who do this <strong>don't mean to be shady</strong>. It's a reflex: <em>\"I said something wrong, let me undo it quickly.\"</em></p>\n\n<p>But in text conversations, <strong>ghost deleting breaks the thread of conversation</strong>. Replies suddenly reference nothing, context disappears, and people are left <strong>questioning what they saw</strong> and wondering <em>why it was removed</em>.</p>\n\n<p>The same goes for:</p>\n<ul>\n  <li>Deleting a message after someone already replied to it</li>\n  <li>Removing an opinion when the discussion gets heated</li>\n  <li>Editing a message completely to say something different</li>\n  <li>Deleting evidence of a mistake instead of owning it</li>\n  <li>Silently removing a link or file you already shared</li>\n</ul>\n\n<p><strong>Own it, correct it, don't erase it!</strong></p>"
        }
      },
      doThis: {
        title: "\u2705 Instead, try this",
        chat: {
          messages: [
            { name: "T.J Miller", text: "hey, the client said they want to cancel the project entirely", time: "11:00 AM" },
            { name: "Thomas Middleditch", text: "wait, what? are you serious?", time: "11:02 AM" },
            { name: "T.J Miller", text: "sorry, I misread the email \u2014 they want to cancel the *meeting*, not the project. my bad!", time: "11:03 AM" },
            { name: "Thomas Middleditch", text: "haha, you scared me. no worries, thanks for the correction", time: "11:04 AM" }
          ]
        },
        explanation: {
          text: "<p><strong>Correcting yourself openly takes the same effort as deleting</strong> \u2014 but it keeps the conversation intact and builds trust instead of suspicion.</p>\n\n<p>Instead of ghost deleting, try:</p>\n<ul>\n  <li>Post a correction: \"sorry, I misread \u2014 here's what it actually says\"</li>\n  <li>Use strikethrough to show the edit: \"~cancel the project~ cancel the meeting\"</li>\n  <li>If it's sensitive, explain why you're removing it</li>\n  <li>Edit the message and add \"(edited)\" with the fix</li>\n</ul>\n\n<p><strong>Transparency beats vanishing.</strong> People trust teammates who own their mistakes far more than those who pretend they never happened.</p>\n\n<p>When done right, <strong>everyone stays in the loop</strong>. \ud83c\udf89</p>"
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
        title: "No borres mensajes sin avisar \u2014 ChatCrimes",
        description: "Por favor no borres mensajes en silencio. Si te equivocaste, corr\u00edgelo abiertamente en vez de hacerlo desaparecer.",
        slug: "no-ghost-deleting"
      },
      header: {
        title: "No ghost deleting",
        subtitle: "por favor no borres mensajes en silencio despu\u00e9s de que la gente los haya le\u00eddo",
        animations: ["*borrado*", "\u00bfespera qu\u00e9?", "\u00bfd\u00f3nde fue?", "juro que dec\u00eda...", "\u00bflo so\u00f1\u00e9?", "desapareci\u00f3."]
      },
      intro: {
        text: "Imagina leer un mensaje, apartar la vista un segundo, y cuando vuelves a mirar ya no est\u00e1 \u2014 como si nunca hubiera existido... \ud83e\udd26\u200d\u2640\ufe0f"
      },
      dontDoThis: {
        title: "\u274c No hagas esto",
        chat: {
          messages: [
            { name: "T.J Miller", text: "ey, el cliente dice que quiere cancelar el proyecto entero", time: "11:00 AM" },
            { name: "Thomas Middleditch", text: "\u00bfespera, qu\u00e9? \u00bfen serio?", time: "11:02 AM" },
            { name: "T.J Miller", text: "ey, el cliente dice que quiere cancelar el proyecto entero", time: "11:00 AM", deleted: true },
            { name: "Thomas Middleditch", text: "\u00bfpor qu\u00e9 borraste eso? ya lo hab\u00eda le\u00eddo", time: "11:15 AM" }
          ]
        },
        explanation: {
          text: "<p>T.J Miller se dio cuenta de que comparti\u00f3 algo prematuramente: <em>d\u00e9jame borrarlo antes de que alguien se d\u00e9 cuenta</em>. <strong>Pero la gente ya lo ley\u00f3, y borrar el mensaje no borra su memoria</strong> \u2014 solo a\u00f1ade confusi\u00f3n y sospecha.</p>\n\n<p>La mayor\u00eda de las personas que hacen esto <strong>no pretenden ser turbias</strong>. Es un reflejo: <em>\"Dije algo mal, d\u00e9jame deshacerlo r\u00e1pido.\"</em></p>\n\n<p>Pero en conversaciones de texto, <strong>borrar en silencio rompe el hilo de la conversaci\u00f3n</strong>. Las respuestas de repente no referencian nada, el contexto desaparece, y la gente se queda <strong>cuestionando lo que vio</strong> y pregunt\u00e1ndose <em>por qu\u00e9 se elimin\u00f3</em>.</p>\n\n<p>Lo mismo va para:</p>\n<ul>\n  <li>Borrar un mensaje despu\u00e9s de que alguien ya respondi\u00f3</li>\n  <li>Eliminar una opini\u00f3n cuando la discusi\u00f3n se calienta</li>\n  <li>Editar un mensaje completamente para decir algo diferente</li>\n  <li>Borrar evidencia de un error en vez de asumirlo</li>\n  <li>Eliminar en silencio un enlace o archivo que ya compartiste</li>\n</ul>\n\n<p><strong>\u00a1As\u00famelo, corr\u00edgelo, no lo borres!</strong></p>"
        }
      },
      doThis: {
        title: "\u2705 En su lugar, intenta esto",
        chat: {
          messages: [
            { name: "T.J Miller", text: "ey, el cliente dice que quiere cancelar el proyecto entero", time: "11:00 AM" },
            { name: "Thomas Middleditch", text: "\u00bfespera, qu\u00e9? \u00bfen serio?", time: "11:02 AM" },
            { name: "T.J Miller", text: "perd\u00f3n, le\u00ed mal el email \u2014 quieren cancelar la *reuni\u00f3n*, no el proyecto. \u00a1mea culpa!", time: "11:03 AM" },
            { name: "Thomas Middleditch", text: "jaja, me asustaste. no pasa nada, gracias por la correcci\u00f3n", time: "11:04 AM" }
          ]
        },
        explanation: {
          text: "<p><strong>Corregirte abiertamente cuesta lo mismo que borrar</strong> \u2014 pero mantiene la conversaci\u00f3n intacta y genera confianza en vez de sospecha.</p>\n\n<p>En lugar de borrar en silencio, intenta:</p>\n<ul>\n  <li>Publica una correcci\u00f3n: \"perd\u00f3n, le\u00ed mal \u2014 esto es lo que realmente dice\"</li>\n  <li>Usa tachado para mostrar el cambio: \"~cancelar el proyecto~ cancelar la reuni\u00f3n\"</li>\n  <li>Si es algo sensible, explica por qu\u00e9 lo eliminas</li>\n  <li>Edita el mensaje y a\u00f1ade \"(editado)\" con la correcci\u00f3n</li>\n</ul>\n\n<p><strong>La transparencia le gana a desaparecer.</strong> La gente conf\u00eda m\u00e1s en compa\u00f1eros que asumen sus errores que en los que fingen que nunca pasaron.</p>\n\n<p>Cuando se hace bien, <strong>todos se mantienen al tanto</strong>. \ud83c\udf89</p>"
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
  },
  nolongvoicenotes: {
    en: {
      seo: {
        title: "Don't send 5-minute voice notes in chat \u2014 ChatCrimes",
        description: "Please don't send extremely long voice notes in work chat. Write it down or keep it under 30 seconds.",
        slug: "no-long-voice-notes"
      },
      header: {
        title: "No long voice notes",
        subtitle: "please don't send a 5-minute voice note when a sentence would do",
        animations: ["4:37 \u25b6", "voice note", "just listen", "2:58 \u25b6", "it's easier to explain", "7:12 \u25b6"]
      },
      intro: {
        text: "Imagine opening a chat and finding a 5-minute voice note with zero context about what's inside... \ud83e\udd26\u200d\u2640\ufe0f"
      },
      dontDoThis: {
        title: "\u274c Don't do this",
        chat: {
          messages: [
            { name: "T.J Miller", text: "", time: "2:00 PM", voiceNote: { duration: "4:37" } },
            { name: "Thomas Middleditch", text: "I'm in a meeting, can you type it?", time: "2:20 PM" },
            { name: "T.J Miller", text: "", time: "2:21 PM", voiceNote: { duration: "12:19" } },
            { name: "Thomas Middleditch", text: "I still can't listen right now", time: "2:45 PM" }
          ]
        },
        explanation: {
          text: "<p>T.J Miller thought it was faster to just talk: <em>it's easier to explain out loud</em>. <strong>But a long voice note forces the other person to stop everything, find headphones, and listen in real time</strong> \u2014 with no way to skim, search, or reference it later.</p>\n\n<p>Most people who do this <strong>don't mean to be inconsiderate</strong>. It's a habit: <em>\"Speaking is faster than typing for me.\"</em></p>\n\n<p>But in work chat, <strong>voice notes are the opposite of async-friendly</strong>. They can't be <strong>skimmed, searched, quoted, or translated</strong>. And a 5-minute monologue often contains 30 seconds of actual information buried in filler.</p>\n\n<p>The same goes for:</p>\n<ul>\n  <li>Multi-minute voice notes for simple questions</li>\n  <li>Sending a second voice note because the first one wasn't clear</li>\n  <li>Voice notes with no text summary of what's inside</li>\n  <li>Rambling voice notes that could be one typed sentence</li>\n  <li>Voice notes in group channels where 20 people have to listen</li>\n</ul>\n\n<p><strong>If it takes more than 30 seconds, type it!</strong></p>"
        }
      },
      doThis: {
        title: "\u2705 Instead, try this",
        chat: {
          messages: [
            { name: "T.J Miller", text: "hey! quick update on the client call: they want to move the deadline to next Friday and add two more pages to the scope. I pushed back on the timeline but agreed to the extra pages. Full notes in the doc.", time: "2:00 PM" },
            { name: "Thomas Middleditch", text: "got it, makes sense. I'll update the backlog", time: "2:02 PM" },
            { name: "T.J Miller", text: "perfect, linked the doc in #project-updates too", time: "2:03 PM" },
            { name: "Thomas Middleditch", text: "great, I'll review after my meeting", time: "2:04 PM" }
          ]
        },
        explanation: {
          text: "<p><strong>A typed message can be read in 10 seconds, skimmed, and referenced later</strong> \u2014 a 5-minute voice note can't do any of that.</p>\n\n<p>Instead of a long voice note, try:</p>\n<ul>\n  <li>Type a summary with the key points</li>\n  <li>If it's complex, write it in a doc and share the link</li>\n  <li>Use bullet points for multiple topics</li>\n  <li>If you must send audio, keep it under 30 seconds and add a text summary</li>\n</ul>\n\n<p><strong>Text is searchable, skimmable, and async.</strong> Your teammates will get the info faster, reference it later, and never have to whisper \"what did that voice note say?\" in a meeting.</p>\n\n<p>When done right, <strong>everyone stays informed without headphones</strong>. \ud83c\udf89</p>"
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
        title: "No mandes notas de voz de 5 minutos en el chat \u2014 ChatCrimes",
        description: "Por favor no mandes notas de voz extremadamente largas en el chat de trabajo. Escr\u00edbelo o mant\u00e9n el audio por debajo de 30 segundos.",
        slug: "no-long-voice-notes"
      },
      header: {
        title: "No long voice notes",
        subtitle: "por favor no mandes una nota de voz de 5 minutos cuando bastar\u00eda una frase",
        animations: ["4:37 \u25b6", "nota de voz", "solo escucha", "2:58 \u25b6", "es m\u00e1s f\u00e1cil hablando", "7:12 \u25b6"]
      },
      intro: {
        text: "Imagina abrir un chat y encontrarte una nota de voz de 5 minutos sin ning\u00fan contexto sobre qu\u00e9 contiene... \ud83e\udd26\u200d\u2640\ufe0f"
      },
      dontDoThis: {
        title: "\u274c No hagas esto",
        chat: {
          messages: [
            { name: "T.J Miller", text: "", time: "2:00 PM", voiceNote: { duration: "4:37" } },
            { name: "Thomas Middleditch", text: "estoy en una reuni\u00f3n, \u00bfpuedes escribirlo?", time: "2:20 PM" },
            { name: "T.J Miller", text: "", time: "2:21 PM", voiceNote: { duration: "12:19" } },
            { name: "Thomas Middleditch", text: "sigo sin poder escuchar ahora mismo", time: "2:45 PM" }
          ]
        },
        explanation: {
          text: "<p>T.J Miller pens\u00f3 que era m\u00e1s r\u00e1pido hablar: <em>es m\u00e1s f\u00e1cil explicarlo de viva voz</em>. <strong>Pero una nota de voz larga obliga a la otra persona a parar todo, buscar auriculares y escuchar en tiempo real</strong> \u2014 sin poder ojear, buscar o referenciar despu\u00e9s.</p>\n\n<p>La mayor\u00eda de las personas que hacen esto <strong>no pretenden ser desconsideradas</strong>. Es un h\u00e1bito: <em>\"Hablar es m\u00e1s r\u00e1pido que escribir para m\u00ed.\"</em></p>\n\n<p>Pero en el chat de trabajo, <strong>las notas de voz son lo opuesto a comunicaci\u00f3n as\u00edncrona</strong>. No se pueden <strong>ojear, buscar, citar ni traducir</strong>. Y un mon\u00f3logo de 5 minutos suele contener 30 segundos de informaci\u00f3n real enterrados entre relleno.</p>\n\n<p>Lo mismo va para:</p>\n<ul>\n  <li>Notas de voz de varios minutos para preguntas simples</li>\n  <li>Enviar una segunda nota de voz porque la primera no qued\u00f3 clara</li>\n  <li>Notas de voz sin resumen de texto sobre qu\u00e9 contienen</li>\n  <li>Audios divagantes que podr\u00edan ser una frase escrita</li>\n  <li>Notas de voz en canales grupales donde 20 personas tienen que escuchar</li>\n</ul>\n\n<p><strong>\u00a1Si tarda m\u00e1s de 30 segundos, escr\u00edbelo!</strong></p>"
        }
      },
      doThis: {
        title: "\u2705 En su lugar, intenta esto",
        chat: {
          messages: [
            { name: "T.J Miller", text: "\u00a1ey! resumen r\u00e1pido de la llamada con el cliente: quieren mover la fecha l\u00edmite al viernes que viene y a\u00f1adir dos p\u00e1ginas m\u00e1s al alcance. Les puse pegas con el plazo pero acept\u00e9 las p\u00e1ginas extra. Notas completas en el doc.", time: "2:00 PM" },
            { name: "Thomas Middleditch", text: "enterado, tiene sentido. actualizo el backlog", time: "2:02 PM" },
            { name: "T.J Miller", text: "perfecto, he enlazado el doc en #project-updates tambi\u00e9n", time: "2:03 PM" },
            { name: "Thomas Middleditch", text: "genial, lo reviso despu\u00e9s de mi reuni\u00f3n", time: "2:04 PM" }
          ]
        },
        explanation: {
          text: "<p><strong>Un mensaje escrito se lee en 10 segundos, se puede ojear y referenciar despu\u00e9s</strong> \u2014 una nota de voz de 5 minutos no puede hacer nada de eso.</p>\n\n<p>En lugar de una nota de voz larga, intenta:</p>\n<ul>\n  <li>Escribe un resumen con los puntos clave</li>\n  <li>Si es complejo, escr\u00edbelo en un doc y comparte el enlace</li>\n  <li>Usa vi\u00f1etas para m\u00faltiples temas</li>\n  <li>Si necesitas mandar audio, que sea de menos de 30 segundos y a\u00f1ade un resumen en texto</li>\n</ul>\n\n<p><strong>El texto es buscable, ojeable y as\u00edncrono.</strong> Tus compa\u00f1eros recibir\u00e1n la info m\u00e1s r\u00e1pido, podr\u00e1n consultarla despu\u00e9s, y no tendr\u00e1n que susurrar \"\u00bfqu\u00e9 dec\u00eda esa nota de voz?\" en una reuni\u00f3n.</p>\n\n<p>Cuando se hace bien, <strong>todos se enteran sin necesitar auriculares</strong>. \ud83c\udf89</p>"
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
  },
  novoicenotes: {
    en: {
      seo: {
        title: "Don't send voice notes instead of text \u2014 ChatCrimes",
        description: "Please don't send voice notes when the information would be better as text. URLs, names, numbers, and instructions belong in writing.",
        slug: "no-voice-notes"
      },
      header: {
        title: "No voice notes",
        subtitle: "please don't send a voice note when the info should be text",
        animations: ["just listen", "it's faster", "audio pls", "can't type rn", "check my audio", "voice msg"]
      },
      intro: {
        text: "Imagine needing a URL, a password, or a meeting ID, and someone sends it to you buried inside a voice note... \ud83e\udd26\u200d\u2640\ufe0f"
      },
      dontDoThis: {
        title: "\u274c Don't do this",
        chat: {
          messages: [
            { name: "Thomas Middleditch", text: "hey, can you send me the staging URL and the API key?", time: "10:00 AM" },
            { name: "T.J Miller", text: "", time: "10:20 AM", voiceNote: { duration: "1:47" } },
            { name: "Thomas Middleditch", text: "I can't copy-paste a voice note... can you type the URL?", time: "10:35 AM" },
            { name: "T.J Miller", text: "", time: "10:36 AM", voiceNote: { duration: "0:23" } }
          ]
        },
        explanation: {
          text: "<p>T.J Miller thought voice was more convenient: <em>it's faster for me to just say it</em>. <strong>But sending a URL, a password, or technical details inside a voice note makes the info impossible to use</strong> \u2014 the recipient can't copy, paste, search, or bookmark it.</p>\n\n<p>Most people who do this <strong>don't realize the friction they're creating</strong>. It feels efficient: <em>\"I'll just dictate it real quick.\"</em></p>\n\n<p>But certain information <strong>only works as text</strong>. Voice notes for data, links, or instructions force the other person to <strong>listen, transcribe by hand, and pray they got it right</strong>.</p>\n\n<p>The same goes for:</p>\n<ul>\n  <li>URLs and links dictated in audio</li>\n  <li>Passwords or credentials spoken out loud</li>\n  <li>Meeting IDs, phone numbers, or codes</li>\n  <li>Step-by-step instructions that need to be followed later</li>\n  <li>Names, email addresses, or anything that needs exact spelling</li>\n</ul>\n\n<p><strong>If it needs to be copied, type it!</strong></p>"
        }
      },
      doThis: {
        title: "\u2705 Instead, try this",
        chat: {
          messages: [
            { name: "Thomas Middleditch", text: "hey, can you send me the staging URL and the API key?", time: "10:00 AM" },
            { name: "T.J Miller", text: "sure! staging: https://staging.example.com and API key: sk-a1b2c3d4e5f6", time: "10:02 AM" },
            { name: "Thomas Middleditch", text: "perfect, just copied both. thanks!", time: "10:03 AM" },
            { name: "T.J Miller", text: "no problem, they're also in the shared vault under \"staging\"", time: "10:04 AM" }
          ]
        },
        explanation: {
          text: "<p><strong>Typed information can be copied, pasted, bookmarked, and searched</strong> \u2014 a voice note saying \"the URL is aitch tee tee pee ess colon slash slash...\" can't.</p>\n\n<p>Instead of a voice note for data, try:</p>\n<ul>\n  <li>Type URLs, keys, and credentials directly in chat</li>\n  <li>Use a shared vault or doc for sensitive data</li>\n  <li>For complex instructions, write numbered steps</li>\n  <li>Save voice for emotional or nuanced conversations, not data transfer</li>\n</ul>\n\n<p><strong>Voice is for tone, text is for data.</strong> Use each where it shines. Nobody wants to replay a voice note three times to transcribe a URL character by character.</p>\n\n<p>When done right, <strong>everyone can just copy and paste</strong>. \ud83c\udf89</p>"
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
        title: "No mandes notas de voz en vez de texto \u2014 ChatCrimes",
        description: "Por favor no mandes notas de voz cuando la informaci\u00f3n deber\u00eda ir en texto. URLs, nombres, n\u00fameros e instrucciones van por escrito.",
        slug: "no-voice-notes"
      },
      header: {
        title: "No voice notes",
        subtitle: "por favor no mandes una nota de voz cuando la info deber\u00eda ser texto",
        animations: ["solo escucha", "es m\u00e1s r\u00e1pido", "audio porfa", "no puedo escribir", "mira mi audio", "nota de voz"]
      },
      intro: {
        text: "Imagina necesitar una URL, una contrase\u00f1a o un ID de reuni\u00f3n, y que alguien te lo mande enterrado dentro de una nota de voz... \ud83e\udd26\u200d\u2640\ufe0f"
      },
      dontDoThis: {
        title: "\u274c No hagas esto",
        chat: {
          messages: [
            { name: "Thomas Middleditch", text: "ey, \u00bfme puedes mandar la URL de staging y la API key?", time: "10:00 AM" },
            { name: "T.J Miller", text: "", time: "10:20 AM", voiceNote: { duration: "1:47" } },
            { name: "Thomas Middleditch", text: "no puedo copiar y pegar una nota de voz... \u00bfpuedes escribir la URL?", time: "10:35 AM" },
            { name: "T.J Miller", text: "", time: "10:36 AM", voiceNote: { duration: "0:23" } }
          ]
        },
        explanation: {
          text: "<p>T.J Miller pens\u00f3 que la voz era m\u00e1s c\u00f3moda: <em>es m\u00e1s r\u00e1pido si lo digo</em>. <strong>Pero mandar una URL, una contrase\u00f1a o datos t\u00e9cnicos dentro de una nota de voz hace que la info sea imposible de usar</strong> \u2014 el receptor no puede copiar, pegar, buscar ni guardarla.</p>\n\n<p>La mayor\u00eda de las personas que hacen esto <strong>no se dan cuenta de la fricci\u00f3n que generan</strong>. Se siente eficiente: <em>\"Se lo dicto r\u00e1pido.\"</em></p>\n\n<p>Pero cierta informaci\u00f3n <strong>solo funciona como texto</strong>. Las notas de voz para datos, enlaces o instrucciones obligan a la otra persona a <strong>escuchar, transcribir a mano y rezar para que lo haya pillado bien</strong>.</p>\n\n<p>Lo mismo va para:</p>\n<ul>\n  <li>URLs y enlaces dictados en audio</li>\n  <li>Contrase\u00f1as o credenciales dichas en voz alta</li>\n  <li>IDs de reuni\u00f3n, n\u00fameros de tel\u00e9fono o c\u00f3digos</li>\n  <li>Instrucciones paso a paso que hay que seguir despu\u00e9s</li>\n  <li>Nombres, direcciones de email o cualquier cosa que requiera deletreo exacto</li>\n</ul>\n\n<p><strong>\u00a1Si hay que copiarlo, escr\u00edbelo!</strong></p>"
        }
      },
      doThis: {
        title: "\u2705 En su lugar, intenta esto",
        chat: {
          messages: [
            { name: "Thomas Middleditch", text: "ey, \u00bfme puedes mandar la URL de staging y la API key?", time: "10:00 AM" },
            { name: "T.J Miller", text: "\u00a1claro! staging: https://staging.example.com y API key: sk-a1b2c3d4e5f6", time: "10:02 AM" },
            { name: "Thomas Middleditch", text: "perfecto, acabo de copiar ambos. \u00a1gracias!", time: "10:03 AM" },
            { name: "T.J Miller", text: "de nada, tambi\u00e9n est\u00e1n en el vault compartido en \"staging\"", time: "10:04 AM" }
          ]
        },
        explanation: {
          text: "<p><strong>La informaci\u00f3n escrita se puede copiar, pegar, guardar y buscar</strong> \u2014 una nota de voz diciendo \"la URL es hache te te pe ese dos puntos barra barra...\" no.</p>\n\n<p>En lugar de una nota de voz para datos, intenta:</p>\n<ul>\n  <li>Escribe URLs, claves y credenciales directamente en el chat</li>\n  <li>Usa un vault compartido o un doc para datos sensibles</li>\n  <li>Para instrucciones complejas, escribe pasos numerados</li>\n  <li>Reserva la voz para conversaciones emocionales o con matices, no para transferir datos</li>\n</ul>\n\n<p><strong>La voz es para el tono, el texto es para los datos.</strong> Usa cada uno donde brille. Nadie quiere reproducir una nota de voz tres veces para transcribir una URL car\u00e1cter a car\u00e1cter.</p>\n\n<p>Cuando se hace bien, <strong>todos pueden simplemente copiar y pegar</strong>. \ud83c\udf89</p>"
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
