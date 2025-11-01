import './ExplanationText.css'

export function ExplanationText(section, isPositive = false) {
  const explanation = document.createElement('div')
  const className = isPositive
    ? 'explanation-text explanation-text-positive'
    : 'explanation-text explanation-text-negative'
  explanation.className = className

  explanation.innerHTML = section.explanation.text

  return explanation
}
