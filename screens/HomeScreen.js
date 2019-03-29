import React from 'react'
import { RemoveTodo } from '../containers'

import { withHeader, TodoList } from '../components'

class HomeScreen extends React.Component {
  render() {
    return (
      <>
        <TodoList list="titles" />
        <RemoveTodo list="titles" />
      </>
    )
  }
}

// Header properties of the screen
export default withHeader({
  // Title of the header
  title: 'Home',
  // The icon on the header
  icon: {
    right: 'plus'
  },
  // The icon event on touch
  navigateTo: 'CreateTitle'
})(HomeScreen)
