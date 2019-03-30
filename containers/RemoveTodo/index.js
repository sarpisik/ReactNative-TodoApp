import { connect } from 'react-redux'
import { RemoveButton } from '../../components'

const mapStateToProps = (state, ownProps) => {
  const selectedTodos =
    ownProps.id != undefined
      ? state.todosState.categoriesList[ownProps.id].selectedTodos
      : state.todosState.selectedTitlesList
  const count = selectedTodos ? selectedTodos.length : selectedTodos
  return {
    ...ownProps,
    count,
    colors: state.themeState.theme
  }
}

const mapDispatchToProps = dispatch => ({
  removeTodo: list => {
    return dispatch({
      ...list
    })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RemoveButton)
