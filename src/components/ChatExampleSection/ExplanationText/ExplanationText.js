import './ExplanationText.css'

export function ExplanationText(t) {
  const explanation = document.createElement('div')
  explanation.className = 'explanation-text'

  explanation.innerHTML = `
    <p>${t.dontDoThis.explanation.text}</p>
  `

  return explanation
}
