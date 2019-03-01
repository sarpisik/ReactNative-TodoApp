import React from 'react'
import { connect } from 'react-redux'
import { Input } from 'react-native-elements'
import { Entypo } from '@expo/vector-icons'

const mapStateToProps = (state, ownProps) => {
  const primary = state.themeState.theme.primary
  return {
    ...ownProps,
    inputContainerStyle: {
      ...ownProps.inputContainerStyle,
      borderColor: primary
    },
    inputStyle: { ...ownProps.inputStyle, color: primary },
    placeholderTextColor: primary,
    leftIcon: <Entypo name={ownProps.icon} color={primary} size={18} />
  }
}

export default connect(mapStateToProps)(Input)
