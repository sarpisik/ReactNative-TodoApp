import { connect } from 'react-redux'
import ACTIONS from '../../constants'
import { TodoForm } from '../../components'

const mapStateToProps = state => ({
  todos: state.todosState.todos
})

const mapDispatchToProps = dispatch => ({
  addTitle: title =>
    dispatch({
      type: ACTIONS.CATEGORY_ADD,
      title
    })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm)
