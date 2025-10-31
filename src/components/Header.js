import './Header.css'

export function Header(t) {
  const header = document.createElement('header')
  header.className = 'header'

  header.innerHTML = `
    <h1>${t.header.title}</h1>
    <h2>${t.header.subtitle}</h2>
  `

  return header
}
