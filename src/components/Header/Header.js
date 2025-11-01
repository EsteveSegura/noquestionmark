import './Header.css'
import TypeIt from 'typeit'

export function Header(t) {
  const header = document.createElement('header')
  header.className = 'header'

  header.innerHTML = `
    <h1>No <span id="typeit-question" class="strikethrough"></span></h1>
    <h2>${t.header.subtitle}</h2>
  `

  // Initialize TypeIt after the element is added to the DOM
  setTimeout(() => {
    new TypeIt('#typeit-question', {
      speed: 150,
      waitUntilVisible: true,
      loop: true,
      cursor: false
    })
      .type('?')
      .pause(2000)
      .delete()
      .type('...?')
      .pause(2000)
      .delete()
      .type('rlly?')
      .pause(2000)
      .delete()
      .type('uh?')
      .pause(2000)
      .delete()
      .type('?????')
      .pause(2000)
      .delete()
      .type('¿¿??')
      .pause(2000)
      .delete()
      .go()
  }, 0)

  return header
}
