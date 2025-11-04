import { Header } from '../components/Header/Header.js'
import { IntroText } from '../components/IntroText/IntroText.js'
import { ChatExampleSection } from '../components/ChatExampleSection/ChatExampleSection.js'
import { Footer } from '../components/Footer/Footer.js'

export function StandardView(t) {
  const container = document.createElement('div')

  container.appendChild(Header(t))
  container.appendChild(IntroText(t))
  container.appendChild(ChatExampleSection(t, 'dontDoThis'))
  container.appendChild(ChatExampleSection(t, 'doThis'))
  container.appendChild(Footer(t))

  return container
}
