import React, { PureComponent } from 'react'
import { Text, TextInput, View } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { styles } from '../../../../themes'

export default class TodoItemLayout extends PureComponent {
  render() {
    const { onPressCheckBox, checked, checkedColor, ...restProps } = this.props
    return (
      <View style={styles.row}>
        <View style={[styles.rowItem, styles.rowCheckBox]}>
          <CheckBox
            onPress={onPressCheckBox}
            checked={checked}
            checkedColor={checkedColor}
          />
        </View>
        <View style={[styles.rowItem, styles.rowTitle]}>
          <TextInput
            style={[styles.rowText, { color: checkedColor }]}
            {...restProps}
          />
        </View>
      </View>
    )
  }
}
