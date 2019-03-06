import { connect } from 'react-redux'
import ACTIONS from '../../constants'
import { TodoForm } from '../../components'

const mapDispatchToProps = dispatch => ({
  addCategory: newCategory =>
    dispatch({
      type: ACTIONS.CATEGORY_ADD,
      newCategory
    })
})

export default connect(
  null,
  mapDispatchToProps
)(TodoForm)
