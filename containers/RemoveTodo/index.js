import { connect } from 'react-redux'
import ACTIONS from '../../constants'
import { RemoveButton } from '../../components'

const mapStateToProps = state => {
  const selectedTodos = state.todosState.selectedTodos
  const count = selectedTodos ? selectedTodos.length : selectedTodos
  return {
    count
  }
}

const mapDispatchToProps = dispatch => ({
  removeTodo: () =>
    dispatch({
      type: ACTIONS.TODO_DELETE
    })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RemoveButton)
