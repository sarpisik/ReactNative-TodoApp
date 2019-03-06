import React, { PureComponent } from 'react'
import { KeyboardAvoidingView, Text, View } from 'react-native'
import { AddTitle } from '../../containers'
import { withHeader } from '../../components'
import { styles } from '../../themes'

class CreateTitleScreen extends PureComponent {
  render() {
    return (
      <KeyboardAvoidingView
        style={[styles.container, styles.centerContainer]}
        behavior="padding">
        <AddTitle navigate={this.props.navigation.replace} />
      </KeyboardAvoidingView>
    )
  }
}

export default withHeader({
  title: 'New Todo',
  icon: {
    left: 'arrow-long-left'
  },
  navigateTo: 'back'
})(CreateTitleScreen)
