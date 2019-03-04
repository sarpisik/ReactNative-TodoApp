import * as CATEGORY_ACTIONS from './Category'
import * as TODO_ACTIONS from './Todo'
import * as THEME_ACTIONS from './Theme'

const ACTIONS = {
  ...CATEGORY_ACTIONS,
  ...TODO_ACTIONS,
  ...THEME_ACTIONS,
  TOGGLE: 'ACTIONS_TOGGLE'
}

export default ACTIONS
