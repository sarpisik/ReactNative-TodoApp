import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { styles } from '../../../themes'

export default class TodoItem extends PureComponent {
  render() {
    const { id, isDone, title } = this.props
    return (
      <View style={styles.row}>
        <View style={[styles.rowItem, styles.rowCheckBox]}>
          <CheckBox checked={isDone} />
        </View>
        <View style={[styles.rowItem, styles.rowTitle]}>
          <Text style={styles.rowText}>{title}</Text>
        </View>
      </View>
    )
  }
}
