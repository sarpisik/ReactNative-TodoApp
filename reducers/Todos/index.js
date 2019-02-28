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
  ]
}

const applyAddTodo = (state, action) => {}

const applyUpdateTodo = (state, action) => {}

const applyDeleteTodo = (state, action) => {}

const applyToggleTodo = (todos, action) => {
  return {
    todos: todos.map((item, index) => {
      if (index !== action.id) return item

      return {
        ...item,
        isDone: !item.isDone
      }
    })
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
      return applyToggleTodo(state.todos, action)
    default:
      return state
  }
}

export default todoReducer
