import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Animated } from 'react-native'
import { connect } from 'react-redux'
import ACTIONS from '../../../constants'

export const mapStateToProps = state => ({
  theme: state.themeState.theme
})

const mapDispatchToProps = dispatch => ({
  changeTheme: theme =>
    dispatch({
      type: ACTIONS.CHANGE_THEME,
      theme
    })
})

const withTheme = Component => {
  class WithTheme extends PureComponent {
    static propTypes = {
      theme: PropTypes.shape({
        primary: PropTypes.string,
        secondary: PropTypes.string
      }).isRequired
    }

    constructor(props) {
      super(props)

      this.prevTheme = this.props.theme
      this.animatedValue = new Animated.Value(0)
    }

    componentWillReceiveProps = nextProps => {
      if (nextProps.theme !== this.props.theme) {
        this.prevTheme = this.props.theme
        this.animateBackgroundColor()
      }
    }

    animateBackgroundColor = () => {
      this.animatedValue.setValue(0)
      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 400
      }).start()
    }

    triggerAnimate = (prevColor, nextColor) =>
      this.animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [prevColor, nextColor]
      })

    render() {
      const colors = {
        primary: () =>
          this.triggerAnimate(this.prevTheme.primary, this.props.theme.primary),
        secondary: () =>
          this.triggerAnimate(
            this.prevTheme.secondary,
            this.props.theme.secondary
          ),
        tertiary: () =>
          this.triggerAnimate(
            this.prevTheme.tertiary,
            this.props.theme.tertiary
          )
      }
      return <Component {...this.props} colors={colors} />
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithTheme)
}

export default withTheme
