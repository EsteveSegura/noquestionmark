import './Header.css'

export function Header() {
  const header = document.createElement('header')
  header.className = 'header'

  header.innerHTML = `
    <h1>No Question Mark</h1>
    <h2>Please don't just respond with "?" in chat</h2>
  `

  return header
}
