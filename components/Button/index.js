import { connect } from 'react-redux'
import { Button } from 'react-native-elements'
const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  buttonStyle: {
    ...ownProps.buttonStyle,
    backgroundColor: state.themeState.theme.primary
  }
})

export default connect(mapStateToProps)(Button)
