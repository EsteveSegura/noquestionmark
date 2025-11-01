import { Header } from '../Header/Header.js'
import { IntroText } from '../IntroText/IntroText.js'
import { ChatExampleSection } from '../ChatExampleSection/ChatExampleSection.js'
import { Footer } from '../Footer/Footer.js'

export function App(t) {
  const container = document.createElement('div')
  container.className = 'app-container'

  container.appendChild(Header(t))
  container.appendChild(IntroText(t))
  container.appendChild(ChatExampleSection(t, 'dontDoThis'))
  container.appendChild(ChatExampleSection(t, 'doThis'))
  container.appendChild(Footer(t))

  return container
}
