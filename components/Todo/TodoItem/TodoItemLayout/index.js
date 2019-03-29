import React, { PureComponent } from 'react'
import { TextInput, View } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { styles } from '../../../../themes'

const Item = ({ children, container }) => {
  return <View style={[styles.rowItem, container]}>{children}</View>
}

export default class TodoItemLayout extends PureComponent {
  render() {
    const {
      onPressCheckBox,
      checked,
      textColor,
      iconColor,
      toggleEdit,
      ...restProps
    } = this.props
    return (
      <View style={styles.row}>
        <Item container={styles.rowCheckBox}>
          <CheckBox
            onPress={onPressCheckBox}
            checked={checked}
            checkedColor={textColor}
          />
        </Item>
        <Item container={styles.rowTitle}>
          <TextInput
            style={[styles.rowText, { color: textColor }]}
            {...restProps}
          />
        </Item>
      </View>
    )
  }
}
