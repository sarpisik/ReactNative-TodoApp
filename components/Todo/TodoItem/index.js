import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import ACTIONS from '../../../constants'
import { CheckBox } from 'react-native-elements'
import { styles } from '../../../themes'

const mapDispatchToProps = dispatch => ({
  toggleTodo: id =>
    dispatch({
      type: ACTIONS.TODO_TOGGLE,
      id
    })
})

class TodoItem extends PureComponent {
  render() {
    const { id, isDone, title, color, toggleTodo } = this.props
    return (
      <View style={styles.row}>
        <View style={[styles.rowItem, styles.rowCheckBox]}>
          <CheckBox
            onPress={() => toggleTodo(id)}
            checked={isDone}
            checkedColor={color}
          />
        </View>
        <View style={[styles.rowItem, styles.rowTitle]}>
          <Text style={[styles.rowText, { color: color }]}>{title}</Text>
        </View>
      </View>
    )
  }
}

export default connect(
  null,
  mapDispatchToProps
)(TodoItem)
