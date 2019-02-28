import { combineReducers } from 'redux'
import themeReducer from './Theme'
import todoReducer from './Todos'

const rootReducer = combineReducers({
  themeState: themeReducer,
  todosState: todoReducer
})

export default rootReducer
