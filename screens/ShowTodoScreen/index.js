import React, { PureComponent } from 'react'
import { RemoveTodo, AddTodo } from '../../containers'
import { withHeader, TodoList } from '../../components'

class ShowTodoScreen extends PureComponent {
  render() {
    // Title ID
    const { id } = this.props.navigation.state.params
    return (
      <>
        <TodoList list="todos" id={id} />
        <AddTodo id={id} theme={this.props.theme} />
        <RemoveTodo list="todos" id={id} />
      </>
    )
  }
}

export default withHeader({
  icon: {
    left: 'arrow-long-left'
  },
  navigateTo: 'back'
})(ShowTodoScreen)
