import React from 'react'
import { RemoveTodo } from '../containers'

import { withHeader, TodoList } from '../components'

class HomeScreen extends React.Component {
  render() {
    // return null
    return (
      <>
        <TodoList list="titles" />
        <RemoveTodo list="titles" />
      </>
    )
  }
}

export default withHeader({
  title: 'Home',
  icon: {
    right: 'plus'
  },
  navigateTo: 'AddTodo'
})(HomeScreen)
