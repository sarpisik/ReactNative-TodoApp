import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import ACTIONS from '../../../constants'
import { CheckBox } from 'react-native-elements'
import { styles } from '../../../themes'

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleTodo: id =>
    dispatch({
      list: ownProps.item,
      type: ACTIONS.TOGGLE,
      ...id
    })
})

class TodoItem extends PureComponent {
  renderItem = () => {
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

    return (
      <View style={styles.row}>
        <View style={[styles.rowItem, styles.rowCheckBox]}>
          <CheckBox
            onPress={() =>
              toggleTodo(
                item === 'titles'
                  ? { titleId: id }
                  : { todoId: id, titleId: props.titleId }
              )
            }
            checked={isToggle}
            checkedColor={color}
          />
        </View>
        <View style={[styles.rowItem, styles.rowTitle]}>
          <Text style={[styles.rowText, { color: color }]}>{title}</Text>
        </View>
      </View>
    )
  }

  render() {
    const { id, title, navigation, item } = this.props
    return item === 'titles' ? (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ShowTodo', { title: title, id: id })
        }>
        {this.renderItem()}
      </TouchableOpacity>
    ) : (
      this.renderItem()
    )
  }
}

export default connect(
  null,
  mapDispatchToProps
)(withNavigation(TodoItem))
