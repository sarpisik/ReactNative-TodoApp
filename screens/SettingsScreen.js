import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import { withHeader, withTheme } from '../components'
import { styles } from '../themes'

class SettingsScreen extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Button
          containerStyle={{ margin: 10 }}
          title="Light"
          onPress={() => this.props.changeTheme('light')}
        />
        <Button
          containerStyle={{ margin: 10 }}
          title="Navy"
          onPress={() => this.props.changeTheme('navy')}
        />
        <Button
          containerStyle={{ margin: 10 }}
          title="Dark"
          onPress={() => this.props.changeTheme('dark')}
        />
      </View>
    )
  }
}

const HeaderSettingsScreen = withHeader({ title: 'Settings' })(SettingsScreen)
export default withTheme(HeaderSettingsScreen)
