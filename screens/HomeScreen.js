import React from 'react'
import { RemoveTodo } from '../containers'

import { withHeader, withTheme, TodoList } from '../components'

class HomeScreen extends React.Component {
  render() {
    // return null
    return (
      <>
        <TodoList />
        <RemoveTodo />
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
