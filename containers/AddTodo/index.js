import { connect } from 'react-redux'
import { AddTodo } from '../../components'

const mapStateToProps = state => ({
  todos: state.todosState.todos
})

const mapDispatchToProps = dispatch => ({
  addEntry: todo =>
    dispatch({
      ...todo
    })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)
