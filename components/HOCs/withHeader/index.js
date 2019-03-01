import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { styles } from '../../../themes'
import ScreenContainer from '../../ScreenContainer'

let iconStyle = {
  // color: colors.text,
  size: 35
}

export default ({
  title = '',
  icon = '',
  navigateTo = ''
}) => WrappedComponent => {
  class WithHeader extends PureComponent {
    onNavigate = () => {
      this.props.navigation.navigate(navigateTo)
    }

    horizontalComponent = (icon, onPress) => {
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
      const {
        colors,
        theme: { primary, secondary }
      } = this.props
      return (
        <ScreenContainer>
          <ScreenContainer
            style={styles.headerContainer}
            colors={colors.primary}>
            <Text
              style={[styles.headerText, { color: this.props.theme.tertiary }]}>
              {title.toUpperCase()}
            </Text>
            <View style={styles.iconNavigate}>
              {this.horizontalComponent(icon)}
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
            <WrappedComponent {...this.props} />
          </ScreenContainer>
        </ScreenContainer>
      )
    }
  }
  return WithHeader
}
