import React from 'react'
import { AddTodo, RemoveTodo, TodoList } from '../containers'
import { ScreenContainer } from '../components'
import { withHeader } from '../components'

class HomeScreen extends React.Component {
  render() {
    return (
      <ScreenContainer>
        <AddTodo theme={this.props.theme} />
        <TodoList list="titles" />
        <RemoveTodo list="titles" />
      </ScreenContainer>
    )
  }
}

// Header properties of the screen
export default withHeader({
  // Title of the header
  title: 'Home'
})(HomeScreen)
