import { Header } from '../components/Header/Header.js'
// import { IntroText } from '../components/IntroText/IntroText.js'
import { ChatCrimesList } from '../components/ChatCrimesList/ChatCrimesList.js'
import { Footer } from '../components/Footer/Footer.js'


export function HomeView(t) {
    const container = document.createElement('div')

    container.appendChild(Header(t, { showAnimation: false}))
    // container.appendChild(IntroText(t))
    container.appendChild(ChatCrimesList(t))
    container.appendChild(Footer(t))

    return container
  }
  