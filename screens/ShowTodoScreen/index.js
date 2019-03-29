import React, { PureComponent } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { ScreenContainer } from '../../components'
import { RemoveTodo, AddTodo } from '../../containers'
import { withHeader, TodoList } from '../../components'

class ShowTodoScreen extends PureComponent {
  render() {
    // Title ID
    const { id } = this.props.navigation.state.params
    return (
      <ScreenContainer>
        <TodoList list="todos" id={id} />
        <AddTodo id={id} theme={this.props.theme} />
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
