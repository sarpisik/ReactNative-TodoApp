import { connect } from 'react-redux'
import ACTIONS from '../../constants'
import { TodoItem } from '../../components'

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleItem: id =>
    dispatch({
      list: ownProps.item,
      type: ACTIONS.TOGGLE,
      ...id
    }),
  editItem: todo =>
    dispatch({
      ...todo
    })
})

export default connect(
  null,
  mapDispatchToProps
)(TodoItem)
