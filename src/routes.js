import { StandardView } from './views/StandardView.js'
import { TestView } from './views/TestView.js'

export const routes = {
  '/': { page: 'noquestionmark', view: StandardView },
  '/en': { page: 'noquestionmark', view: StandardView },
  '/es': { page: 'noquestionmark', view: StandardView },
  '/test': {page: 'test', view: TestView }
}
