import './ExplanationText.css'

export function ExplanationText(section) {
  const explanation = document.createElement('div')
  explanation.className = 'explanation-text'

  explanation.innerHTML = `
    <p>${section.explanation.text}</p>
  `

  return explanation
}
