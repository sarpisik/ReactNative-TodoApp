import React, { PureComponent } from 'react'
import { KeyboardAvoidingView, Text, View } from 'react-native'
import { AddTodo } from '../../containers'
import { withHeader } from '../../components'
import { styles } from '../../themes'

class AddTodoScreen extends PureComponent {
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

export default withHeader({
  title: 'New Todo',
  icon: {
    left: 'arrow-long-left'
  },
  navigateTo: 'Main'
})(AddTodoScreen)
