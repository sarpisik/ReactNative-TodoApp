import ACTIONS from '../../constants'

// Returns current time to generate todo ID
const getCurrentTime = () => Date.now()

// Returns todo titles via passed callback
const titleReducer = (objList, prop, condition, callBack) => {
  Object.values(objList).forEach(item => {
    if (item[prop] !== condition) callBack(item.id)
  })
}

// Returns toggled titles/todos list
const listOfSelecteds = list =>
  list.filter(item => {
    if (item.isToggle) return item
  })

// Returns desired todos object via passed callback
const todoAction = (state, titleId, callBack) => {
  return {
    ...state,
    todosList: {
      ...state.todosList,
      [titleId]: {
        ...state.todosList[titleId],
        todos: callBack(state.todosList[titleId].todos)
      }
    }
  }
}

const applyToggle = (state, action) => {
  // If this is toggle todo list action...
  if (action.todoId != undefined) {
    const todos = newList(state.todosList[action.titleId].todos, action.todoId)
    const selectedTodos = listOfSelecteds(todos)

    return {
      ...state,
      todosList: {
        ...state.todosList,
        [action.titleId]: {
          ...state.todosList[action.titleId],
          todos,
          selectedTodos
        }
      }
    }
  }

  // Else this is toggle title action
  const todosList = {
    ...state.todosList,
    [action.titleId]: {
      ...state.todosList[action.titleId],
      isToggle: !state.todosList[action.titleId].isToggle
    }
  }
  const selectedTitlesList = listOfSelecteds(Object.values(todosList))

  return {
    ...state,
    todosList,
    selectedTitlesList
  }
}

const applyAddTitle = (state, action) => {
  const newTitle = {
    title: action.text,
    id: getCurrentTime(),
    createdAt: getCurrentTime(),
    isToggle: false,
    selectedTodos: [],
    todos: []
  }

  return {
    ...state,
    todosList: {
      ...state.todosList,
      [newTitle.id]: newTitle
    }
  }
}

const applyDeleteTitle = state => {
  let todosList = {}
  titleReducer(state.todosList, 'isToggle', true, id => {
    todosList[id] = state.todosList[id]
  })

  return {
    ...state,
    todosList,
    selectedTitlesList: []
  }
}

const applyAddTodo = (state, action) => {
  const todo = {
    text: action.text,
    id: getCurrentTime(),
    isToggle: false
  }
  const addTodo = todos => {
    return [...todos, todo]
  }

  return todoAction(state, action.titleId, addTodo)
}

const applyUpdateTodo = (state, action) => {
  const editTodo = todos => {
    return todos.map(todo => {
      if (todo.id !== action.todoId) {
        return todo
      }
      todo.text = action.text
      return todo
    })
  }
  return todoAction(state, action.titleId, editTodo)
}

const applyDeleteTodo = (state, action) => {
  const reduceTodo = todos => {
    return todos.filter(item => {
      if (item.id !== action.todoId) return item
    })
  }

  return todoAction(state, action.titleId, reduceTodo)
}

const applyDeleteToggledTodo = (state, action) => {
  const reduceToggledTodo = todos => {
    return todos.filter(item => {
      if (!item.isToggle) return item
    })
  }

  let newState = todoAction(state, action.titleId, reduceToggledTodo)
  newState.todosList[action.titleId].selectedTodos = []

  return newState
}

const newList = (list, id) =>
  list.map(item => {
    if (item.id !== id) return item

    return {
      ...item,
      isToggle: !item.isToggle
    }
  })

const INITIAL_STATE = {
  todosList: {
    0: {
      id: 0,
      isToggle: false,
      title: 'Shopping',
      createdAt: new Date(),
      selectedTodos: [],
      todos: [
        {
          id: 0,
          isToggle: false,
          text: 'todo 1'
        },
        {
          id: 1,
          isToggle: false,
          text: 'todo 2'
        }
      ]
    },
    1: {
      id: 1,
      isToggle: false,
      title: 'Works',
      createdAt: new Date(),
      selectedTodos: [],
      todos: [
        {
          id: 0,
          isToggle: false,
          text: 'todo 1'
        },
        {
          id: 1,
          isToggle: false,
          text: 'todo 2'
        }
      ]
    },
    2: {
      id: 2,
      isToggle: false,
      title: 'Plans',
      createdAt: new Date(),
      selectedTodos: [],
      todos: [
        {
          id: 0,
          isToggle: false,
          text: 'todo 1'
        },
        {
          id: 1,
          isToggle: false,
          text: 'todo 2'
        }
      ]
    }
  },
  selectedTitlesList: []
}

function todoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTIONS.CATEGORY_ADD:
      return applyAddTitle(state, action)
    case ACTIONS.CATEGORY_DELETE:
      return applyDeleteTitle(state)
    case ACTIONS.TODO_ADD:
      return applyAddTodo(state, action)
    case ACTIONS.TODO_UPDATE:
      return applyUpdateTodo(state, action)
    case ACTIONS.TODO_DELETE:
      return applyDeleteTodo(state, action)
    case ACTIONS.TODO_TOGGLED_DELETE:
      return applyDeleteToggledTodo(state, action)
    case ACTIONS.TOGGLE:
      return applyToggle(state, action)
    default:
      return state
  }
}

export default todoReducer
