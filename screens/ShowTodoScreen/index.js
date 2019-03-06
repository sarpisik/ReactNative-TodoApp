import React, { PureComponent } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { ScreenContainer } from '../../components'
import { RemoveTodo, AddTodo } from '../../containers'
import { withHeader, TodoList } from '../../components'

class ShowTodoScreen extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isTouchedScreen: false
    }
  }

  onToggleState = () => {
    this.setState((state, props) => {
      return { isTouchedScreen: !state.isTouchedScreen }
    })
  }

  render() {
    // Title ID
    const { id } = this.props.navigation.state.params
    return (
      <TouchableWithoutFeedback onPress={() => this.onToggleState()}>
        <ScreenContainer>
          <TodoList list="todos" id={id} />
          <AddTodo
            isActive={this.state.isTouchedScreen}
            onBlur={this.onToggleState}
            id={id}
            theme={this.props.theme}
          />
          <RemoveTodo list="todos" id={id} />
        </ScreenContainer>
      </TouchableWithoutFeedback>
    )
  }
}

export default withHeader({
  icon: {
    left: 'arrow-long-left'
  },
  navigateTo: 'back'
})(ShowTodoScreen)
