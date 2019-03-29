import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { styles } from '../../../themes'
import ScreenContainer from '../../ScreenContainer'
import withTheme from '../withTheme'

let iconStyle = {
  // color: colors.text,
  size: 40
}

const withHeader = ({
  title = '',
  icon = {
    left: '',
    right: ''
  },
  navigateTo = ''
}) => Component => {
  class WithHeader extends PureComponent {
    onNavigate = () => {
      navigateTo === 'back'
        ? this.props.navigation.goBack()
        : this.props.navigation.navigate(navigateTo)
    }

    iconComponent = icon => {
      iconStyle.color = this.props.theme.tertiary
      return (
        <TouchableOpacity
          onPress={() => this.onNavigate()}
          style={styles.headerButton}>
          <Text>{icon && <Entypo name={icon} {...iconStyle} />}</Text>
        </TouchableOpacity>
      )
    }

    render() {
      const { colors, navigation } = this.props
      return (
        <ScreenContainer>
          <ScreenContainer
            style={styles.headerContainer}
            colors={colors.primary}>
            <View style={styles.iconLeft}>{this.iconComponent(icon.left)}</View>
            <Text
              style={[
                styles.headerText,
                {
                  color: this.props.theme.tertiary
                }
              ]}>
              {navigation.getParam('title', title).toUpperCase()}
            </Text>
            <View style={styles.iconRight}>
              {this.iconComponent(icon.right)}
            </View>
          </ScreenContainer>
          <ScreenContainer colors={colors.secondary}>
            <Component {...this.props} />
          </ScreenContainer>
        </ScreenContainer>
      )
    }
  }
  return withTheme(WithHeader)
}

export default withHeader
