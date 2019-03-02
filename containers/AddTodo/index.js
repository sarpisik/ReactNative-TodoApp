import { connect } from 'react-redux'
import ACTIONS from '../../constants'
import { TodoForm } from '../../components'

const mapStateToProps = state => ({
  todos: state.todosState.todos
})

const mapDispatchToProps = dispatch => ({
  addTodo: title =>
    dispatch({
      type: ACTIONS.TODO_ADD,
      title
    })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm)
