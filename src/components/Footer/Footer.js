import './Footer.css'

export function Footer(t) {
  const footer = document.createElement('footer')
  footer.className = 'footer'

  footer.innerHTML = t.footer.paragraphs.map(p => `<p>${p}</p>`).join('')

  return footer
}
