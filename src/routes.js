import { StandardView } from './views/StandardView.js'
import { HomeView } from './views/HomeView.js'

export const routes = {
  // Home
  '/': {page: 'home', view: HomeView },
  '/en': { page: 'home', view: HomeView },
  '/es': { page: 'home', view: HomeView },
  // no-question-mark
  '/no-question-mark': { page: 'noquestionmark', view: StandardView },
  '/en/no-question-mark': { page: 'noquestionmark', view: StandardView },
  '/es/no-question-mark': { page: 'noquestionmark', view: StandardView },
  // no-channel-only
  '/no-channel-only': { page: 'nochannelonly', view: StandardView },
  '/en/no-channel-only': { page: 'nochannelonly', view: StandardView },
  '/es/no-channel-only': { page: 'nochannelonly', view: StandardView },
  // nopublicshaming
  '/no-public-shaming': { page: 'nopublicshaming', view: StandardView },
  '/en/no-public-shaming': { page: 'nopublicshaming', view: StandardView },
  '/es/no-public-shaming': { page: 'nopublicshaming', view: StandardView },
  // noreactionasanswer
  '/no-reaction-as-answer': { page: 'noreactionasanswer', view: StandardView },
  '/en/no-reaction-as-answer': { page: 'noreactionasanswer', view: StandardView },
  '/es/no-reaction-as-answer': { page: 'noreactionasanswer', view: StandardView },
  // usethethread
  '/use-the-thread': { page: 'usethethread', view: StandardView },
  '/en/use-the-thread': { page: 'usethethread', view: StandardView },
  '/es/use-the-thread': { page: 'usethethread', view: StandardView },
}
