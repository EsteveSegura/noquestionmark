import './IntroText.css'

export function IntroText(t) {
  const intro = document.createElement('section')
  intro.className = 'intro-text'

  intro.innerHTML = `
    <p>${t.intro.text}</p>
  `

  return intro
}
