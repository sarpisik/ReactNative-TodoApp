import { connect } from 'react-redux'
import { Button } from 'react-native-elements'
const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  buttonStyle: {
    ...ownProps.buttonStyle,
    backgroundColor: state.themeState.theme.primary
  },
  titleStyle: { ...ownProps.titleStyle, color: state.themeState.theme.tertiary }
})

export default connect(mapStateToProps)(Button)
