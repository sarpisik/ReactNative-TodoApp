import ACTIONS from '../../constants'
import todoAction, {
  getCurrentTime,
  categoryReducer,
  listOfCheckeds,
  toggleTodo
} from './functions'

const INITIAL_STATE = {
  categoriesList: {},
  selectedTitlesList: []
}

function todoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTIONS.CATEGORY_ADD:
      return apply_Add_Title(state, action)
    case ACTIONS.CATEGORY_DELETE:
      return apply_Delete_Category(state)
    case ACTIONS.TODO_ADD:
      return apply_Add_Todo(state, action)
    case ACTIONS.TODO_UPDATE:
      return apply_Update_Todo(state, action)
    case ACTIONS.TODO_DELETE:
      return apply_Delete_Todo(state, action)
    case ACTIONS.TODO_TOGGLED_DELETE:
      return apply_Delete_Toggled_Todo(state, action)
    case ACTIONS.TOGGLE:
      return apply_Toggle(state, action)
    default:
      return state
  }
}

export default todoReducer

function apply_Toggle(state, action) {
  // If ID passed, toggle todo object.
  // Else, toggle category object.
  if (action.todoId != undefined) {
    const todos = toggleTodo(
      state.categoriesList[action.titleId].todos,
      action.todoId
    )
    const selectedTodos = listOfCheckeds(todos)

    return {
      ...state,
      categoriesList: {
        ...state.categoriesList,
        [action.titleId]: {
          ...state.categoriesList[action.titleId],
          todos,
          selectedTodos
        }
      }
    }
  }

  const categoriesList = {
    ...state.categoriesList,
    [action.titleId]: {
      ...state.categoriesList[action.titleId],
      isToggle: !state.categoriesList[action.titleId].isToggle
    }
  }
  const selectedTitlesList = listOfCheckeds(Object.values(categoriesList))
  return {
    ...state,
    categoriesList,
    selectedTitlesList
  }
}

function apply_Add_Title(state, action) {
  return {
    ...state,
    categoriesList: {
      ...state.categoriesList,
      [action.newCategory.id]: action.newCategory
    }
  }
}

function apply_Delete_Category(state) {
  let categoriesList = {}
  categoryReducer(state.categoriesList, 'isToggle', true, id => {
    categoriesList[id] = state.categoriesList[id]
  })

  return {
    ...state,
    categoriesList,
    selectedTitlesList: []
  }
}

function apply_Add_Todo(state, action) {
  const actionTime = getCurrentTime()
  const todo = {
    text: action.text,
    id: actionTime,
    isToggle: false
  }
  const addTodo = todos => {
    return [...todos, todo]
  }

  return todoAction(state, action.titleId, actionTime, addTodo)
}

function apply_Update_Todo(state, action) {
  const actionTime = getCurrentTime()

  const editTodo = todos => {
    return todos.map(todo => {
      if (todo.id !== action.todoId) {
        return todo
      }
      todo.text = action.text
      return todo
    })
  }
  return todoAction(state, action.titleId, actionTime, editTodo)
}

function apply_Delete_Todo(state, action) {
  const actionTime = getCurrentTime()

  const reduceTodo = todos => {
    return todos.filter(item => {
      if (item.id !== action.todoId) return item
    })
  }

  return todoAction(state, action.titleId, actionTime, reduceTodo)
}

function apply_Delete_Toggled_Todo(state, action) {
  const actionTime = getCurrentTime()

  const reduceToggledTodo = todos => {
    return todos.filter(item => {
      if (!item.isToggle) return item
    })
  }

  let newState = todoAction(
    state,
    action.titleId,
    actionTime,
    reduceToggledTodo
  )
  newState.categoriesList[action.titleId].selectedTodos = []

  return newState
}
