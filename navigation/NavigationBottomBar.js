import React from 'react'
import { BottomTabBar } from 'react-navigation'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  const { primary, secondary, tertiary } = state.themeState.theme
  const themeTab = {
    ...ownProps,
    activeTintColor: tertiary,
    showLabel: false,
    labelStyle: {
      fontSize: 24
    },
    tabStyle: {
      height: '100%'
    },
    style: {
      backgroundColor: primary,
      color: secondary,
      height: 60
    }
  }

  return themeTab
}

export default connect(mapStateToProps)(BottomTabBar)
