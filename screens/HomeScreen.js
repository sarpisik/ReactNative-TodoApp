import React from 'react'
import { RemoveTodo, AddTodo } from '../containers'

import { withHeader, TodoList } from '../components'

class HomeScreen extends React.Component {
  render() {
    // return null
    return (
      <>
        <TodoList list="titles" />
        <AddTodo theme={this.props.theme} />
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
  navigateTo: 'CreateTitle'
})(HomeScreen)
