import React, { PureComponent } from 'react'
import { KeyboardAvoidingView, Text, View } from 'react-native'
import { AddTodo } from '../../containers'
import { styles } from '../../themes'

export default class AddTodoScreen extends PureComponent {
  render() {
    return (
      <KeyboardAvoidingView
        style={[styles.container, styles.centerContainer]}
        behavior="padding">
        <AddTodo navigate={this.props.navigation.goBack} />
      </KeyboardAvoidingView>
    )
  }
}
