import React, { PureComponent } from 'react'
import { TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import ACTIONS from '../../../constants'
import TodoItemLayout from './TodoItemLayout'

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleTodo: id =>
    dispatch({
      list: ownProps.item,
      type: ACTIONS.TOGGLE,
      ...id
    }),
  editTodo: todo =>
    dispatch({
      ...todo
    })
})

class TodoItem extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      text: props.title,
      editable: props.item === 'titles' ? false : true
    }
  }

  componentDidUpdate = prevProps => {
    prevProps.title !== this.props.title &&
      this.setState({ text: this.props.title })
  }

  onBlur = () => {
    this.props.title !== this.state.text &&
      this.props.editTodo({
        titleId: this.props.titleId,
        todoId: this.props.id,
        type: this.state.text ? ACTIONS.TODO_UPDATE : ACTIONS.TODO_DELETE,
        text: this.state.text
      })
  }

  renderItem = text => {
    const {
      id,
      isToggle,
      title,
      color,
      toggleTodo,
      navigation,
      item,
      ...props
    } = this.props
    const { editable } = this.state

    return (
      <TodoItemLayout
        onPressCheckBox={() =>
          toggleTodo(
            editable ? { todoId: id, titleId: props.titleId } : { titleId: id }
          )
        }
        checked={isToggle}
        checkedColor={color}
        value={text}
        editable={this.state.editable}
        onChangeText={text => this.setState({ text })}
        onBlur={() => this.onBlur()}
      />
    )
  }

  render() {
    const { id, title, navigation, item } = this.props
    const { editable, text } = this.state
    return editable ? (
      this.renderItem(text)
    ) : (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ShowTodo', { title: title, id: id })
        }>
        {this.renderItem(title)}
      </TouchableOpacity>
    )
  }
}

export default connect(
  null,
  mapDispatchToProps
)(withNavigation(TodoItem))

export { TodoItemLayout }
