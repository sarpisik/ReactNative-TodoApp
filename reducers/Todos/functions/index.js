// Return current time
export const getCurrentTime = () => {
  const d = new Date()
  return d.getTime()
}

// Return the category object via passed callback
export const categoryReducer = (objList, prop, condition, callBack) => {
  Object.values(objList).forEach(item => {
    if (item[prop] !== condition) callBack(item.id)
  })
}

// Return toggled catagories/todos list
export const listOfCheckeds = list =>
  list.filter(item => {
    if (item.isToggle) return item
  })

// Toggle todo object by id
export const toggleTodo = (list, id) =>
  list.map(item => {
    if (item.id !== id) return item

    return {
      ...item,
      isToggle: !item.isToggle
    }
  })

// Return the list of todos objects via passed callback
export default (state, titleId, time, callBack) => {
  return {
    ...state,
    categoriesList: {
      ...state.categoriesList,
      [titleId]: {
        ...state.categoriesList[titleId],
        lastModified: time,
        todos: callBack(state.categoriesList[titleId].todos)
      }
    }
  }
}
