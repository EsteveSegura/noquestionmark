import { StandardView } from './views/StandardView.js'
import { TestView } from './views/TestView.js'

export const routes = {
  '/no-question-mark': { page: 'noquestionmark', view: StandardView },
  '/en/no-question-mark': { page: 'noquestionmark', view: StandardView },
  '/es/no-question-mark': { page: 'noquestionmark', view: StandardView },
  '/test': {page: 'test', view: TestView }
}
