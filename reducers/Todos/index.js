import ACTIONS from '../../constants'

const INITIAL_STATE = {
  todos: [
    {
      id: 0,
      isDone: false,
      title: 'todo 1'
    },
    {
      id: 1,
      isDone: false,
      title: 'todo 2'
    },
    {
      id: 2,
      isDone: false,
      title: 'todo 3'
    }
  ],
  selectedTodos: null
}

const applyAddTodo = (state, action) => {}

const applyUpdateTodo = (state, action) => {}

const applyDeleteTodo = (state, action) => {}

const applyToggleTodo = (state, action) => {
  const todos = state.todos.map((item, index) => {
    if (index !== action.id) return item

    return {
      ...item,
      isDone: !item.isDone
    }
  })

  const selectedTodos = todos.filter(item => {
    if (item.isDone) return item
  })
  return {
    ...state,
    todos,
    selectedTodos
  }
}

function todoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTIONS.TODO_ADD:
      return applyAddTodo(state, action)
    case ACTIONS.TODO_UPDATE:
      return applyUpdateTodo(state, action)
    case ACTIONS.TODO_DELETE:
      return applyDeleteTodo(state, action)
    case ACTIONS.TODO_TOGGLE:
      return applyToggleTodo(state, action)
    default:
      return state
  }
}

export default todoReducer
