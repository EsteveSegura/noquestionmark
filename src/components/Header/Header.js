import './Header.css'

export function Header(t) {
  const header = document.createElement('header')
  header.className = 'header'

  // In SSR, render with initial "?"
  const isSSR = typeof window === 'undefined' || (typeof global !== 'undefined' && global.__SSR__)
  const initialText = isSSR ? '?' : ''

  header.innerHTML = `
    <h1>No <span id="typeit-question" class="strikethrough">${initialText}</span></h1>
    <h2>${t.header.subtitle}</h2>
  `

  // Only initialize TypeIt on the client
  if (!isSSR) {
    setTimeout(async () => {
      try {
        const TypeIt = (await import('typeit')).default
        const instance = new TypeIt('#typeit-question', {
          speed: 150,
          waitUntilVisible: true,
          loop: true,
          cursor: false
        })

        // Build animation sequence from translations
        t.header.animations.forEach((text) => {
          instance.type(text).pause(2000).delete()
        })

        instance.go()
      } catch (e) {
        // TypeIt failed, do nothing
      }
    }, 100)
  }

  return header
}
