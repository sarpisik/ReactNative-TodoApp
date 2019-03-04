import ACTIONS from '../../constants'

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
          title: 'todo 1'
        },
        {
          id: 1,
          isToggle: false,
          title: 'todo 2'
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
          title: 'todo 1'
        },
        {
          id: 1,
          isToggle: false,
          title: 'todo 2'
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
          title: 'todo 1'
        },
        {
          id: 1,
          isToggle: false,
          title: 'todo 2'
        }
      ]
    }
  },
  selectedTitlesList: []
}

const applyAddTodo = (state, action) => {
  const todo = {
    title: action.title,
    id: state.todos.length > 0 ? state.todos.length + 1 : 0,
    isToggle: false
  }
  return {
    ...state,
    todos: [...state.todos, todo]
  }
}

const applyUpdateTodo = (state, action) => {}

const titleReducer = (objList, prop, condition, callBack) => {
  Object.values(objList).forEach(item => {
    if (item[prop] !== condition) callBack(item.id)
  })
}

const applyDeleteTodo = (state, action) => {
  if (action.list === 'titles') {
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

  const todos = state.todosList[action.titleId].todos.filter(item => {
    if (!item.isToggle) return item
  })

  return {
    ...state,
    todosList: {
      ...state.todosList,
      [action.titleId]: {
        ...state.todosList[action.titleId],
        todos,
        selectedTodos: []
      }
    }
  }
}

const newList = (list, id) =>
  list.map(item => {
    if (item.id !== id) return item

    return {
      ...item,
      isToggle: !item.isToggle
    }
  })

const listOfSelecteds = list =>
  list.filter(item => {
    if (item.isToggle) return item
  })

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

function todoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTIONS.TODO_ADD:
      return applyAddTodo(state, action)
    case ACTIONS.TODO_UPDATE:
      return applyUpdateTodo(state, action)
    case ACTIONS.TODO_DELETE:
      return applyDeleteTodo(state, action)
    case ACTIONS.TOGGLE:
      return applyToggle(state, action)
    default:
      return state
  }
}

export default todoReducer
