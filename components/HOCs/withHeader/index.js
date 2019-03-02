import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { styles } from '../../../themes'
import ScreenContainer from '../../ScreenContainer'
import withTheme from '../withTheme'
// import { withTheme } from 'react-native-elements'

let iconStyle = {
  // color: colors.text,
  size: 35
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
      this.props.navigation.navigate(navigateTo)
    }

    horizontalComponent = icon => {
      iconStyle.color = this.props.theme.tertiary
      return (
        <TouchableOpacity
          onPress={() => this.onNavigate()}
          style={styles.headerButton}>
          <Text>{icon && <Entypo name={icon} {...iconStyle} />}</Text>
        </TouchableOpacity>
      )
    }

    centerComponent = title => ({
      text: title.toUpperCase(),
      style: {}
    })

    render() {
      const { colors } = this.props
      return (
        <ScreenContainer>
          <ScreenContainer
            style={styles.headerContainer}
            colors={colors.primary}>
            <View style={styles.iconLeft}>
              {this.horizontalComponent(icon.left)}
            </View>
            <Text
              style={[styles.headerText, { color: this.props.theme.tertiary }]}>
              {title.toUpperCase()}
            </Text>
            <View style={styles.iconRight}>
              {this.horizontalComponent(icon.right)}
            </View>

            {/* <Header
              containerStyle={[
                styles.headerContainer,
                {
                  backgroundColor: 'rgba(0,0,0,0)',
                  borderBottomColor: 'rgba(0,0,0,0)'
                }
              ]}
              // centerContainerStyle={styles.centerContainer}
              leftComponent={
                icon
                  ? this.horizontalComponent('chevron-left', this.goBack)
                  : null
              }
              centerComponent={this.centerComponent(title)}
            /> */}
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
