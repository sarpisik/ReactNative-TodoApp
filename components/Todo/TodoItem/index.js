import React, { PureComponent } from 'react'
import { withNavigation } from 'react-navigation'
import ACTIONS from '../../../constants'
import TodoItemLayout from '../TodoItemLayout'

class TodoItem extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      text: props.title,
      isCategory: props.item === 'titles' ? true : false
    }
  }

  componentDidUpdate = prevProps => {
    // Set state, if the state is different than redux state
    prevProps.title !== this.props.title &&
      this.setState({ text: this.props.title })
  }

  onBlur = () => {
    // Dispatch redux state if it's different than local state
    this.props.editItem({
      titleId: this.props.titleId,
      todoId: this.props.id,
      type: this.state.isCategory
        ? ACTIONS.CATEGORY_UPDATE
        : ACTIONS.TODO_UPDATE,
      text: this.state.text
    })
  }

  onNavigate = () => {
    const {
      navigation: { navigate },
      id
    } = this.props
    // Navigate to todo list screen
    navigate('ShowTodo', {
      title: this.state.text,
      id: id
    })
  }

  render() {
    const {
      id,
      isToggle,
      title,
      colors,
      toggleItem,
      navigation,
      item,
      ...props
    } = this.props
    const { isCategory, text } = this.state

    return (
      <TodoItemLayout
        onPressCheckBox={() =>
          toggleItem(
            isCategory
              ? { titleId: id }
              : { todoId: id, titleId: props.titleId }
          )
        }
        checked={isToggle}
        colors={colors}
        value={text}
        onChangeText={text => this.setState({ text })}
        onBlur={() => this.props.title !== this.state.text && this.onBlur()}
        // Below props are needed for category item
        isCategory={isCategory}
        onNavigate={() => this.onNavigate()}
      />
    )
  }
}

export default withNavigation(TodoItem)
