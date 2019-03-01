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

const HeaderHomeScreen = withHeader({
  title: 'Home',
  icon: 'plus',
  navigateTo: 'AddTodo'
})(HomeScreen)

export default withTheme(HeaderHomeScreen)
