import React, { PureComponent } from 'react'
import { ScreenContainer } from '../../components'
import { RemoveTodo, AddTodo, TodoList } from '../../containers'
import { withHeader } from '../../components'

class ShowTodoScreen extends PureComponent {
  render() {
    // Title ID
    const { id } = this.props.navigation.state.params
    return (
      <ScreenContainer>
        <AddTodo id={id} theme={this.props.theme} />
        <TodoList list="todos" id={id} />
        <RemoveTodo list="todos" id={id} />
      </ScreenContainer>
    )
  }
}

export default withHeader({
  icon: {
    left: 'arrow-long-left'
  },
  navigateTo: 'back'
})(ShowTodoScreen)
