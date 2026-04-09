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
  // no-hello
  '/no-hello': { page: 'nohello', view: StandardView },
  '/en/no-hello': { page: 'nohello', view: StandardView },
  '/es/no-hello': { page: 'nohello', view: StandardView },
  // no-message-splitting
  '/no-message-splitting': { page: 'nomessagesplitting', view: StandardView },
  '/en/no-message-splitting': { page: 'nomessagesplitting', view: StandardView },
  '/es/no-message-splitting': { page: 'nomessagesplitting', view: StandardView },
  // just-ask
  '/just-ask': { page: 'justask', view: StandardView },
  '/en/just-ask': { page: 'justask', view: StandardView },
  '/es/just-ask': { page: 'justask', view: StandardView },
  // no-unnecessary-mentions
  '/no-unnecessary-mentions': { page: 'nounnecessarymentions', view: StandardView },
  '/en/no-unnecessary-mentions': { page: 'nounnecessarymentions', view: StandardView },
  '/es/no-unnecessary-mentions': { page: 'nounnecessarymentions', view: StandardView },
  // respect-time-zones
  '/respect-time-zones': { page: 'respecttimezones', view: StandardView },
  '/en/respect-time-zones': { page: 'respecttimezones', view: StandardView },
  '/es/respect-time-zones': { page: 'respecttimezones', view: StandardView },
  // no-dry-ok
  '/no-dry-ok': { page: 'nodryok', view: StandardView },
  '/en/no-dry-ok': { page: 'nodryok', view: StandardView },
  '/es/no-dry-ok': { page: 'nodryok', view: StandardView },
  // no-passive-aggressive
  '/no-passive-aggressive': { page: 'nopassiveaggressive', view: StandardView },
  '/en/no-passive-aggressive': { page: 'nopassiveaggressive', view: StandardView },
  '/es/no-passive-aggressive': { page: 'nopassiveaggressive', view: StandardView },
  // no-ghost-deleting
  '/no-ghost-deleting': { page: 'noghostdeleting', view: StandardView },
  '/en/no-ghost-deleting': { page: 'noghostdeleting', view: StandardView },
  '/es/no-ghost-deleting': { page: 'noghostdeleting', view: StandardView },
  // no-long-voice-notes
  '/no-long-voice-notes': { page: 'nolongvoicenotes', view: StandardView },
  '/en/no-long-voice-notes': { page: 'nolongvoicenotes', view: StandardView },
  '/es/no-long-voice-notes': { page: 'nolongvoicenotes', view: StandardView },
  // no-voice-notes
  '/no-voice-notes': { page: 'novoicenotes', view: StandardView },
  '/en/no-voice-notes': { page: 'novoicenotes', view: StandardView },
  '/es/no-voice-notes': { page: 'novoicenotes', view: StandardView },
}
