import { StyleSheet, Dimensions } from 'react-native'
const SCREEN_WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
  button: {
    width: SCREEN_WIDTH * 0.8,
    borderRadius: 30,
    marginTop: 10
  },
  container: {
    flex: 1
  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  errorInputStyle: {
    marginTop: 0,
    textAlign: 'center',
    color: '#F44336'
  },
  formContainer: {
    width: SCREEN_WIDTH * 0.8,
    alignItems: 'center'
  },
  headerButton: {
    alignItems: 'center',
    height: 48,
    justifyContent: 'center',
    paddingRight: 5,
    width: 40
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '15%',
    maxHeight: 75,
    justifyContent: 'center',
    paddingHorizontal: 0,
    paddingTop: 25
  },
  headerText: { fontWeight: 'bold', fontSize: 25, fontFamily: 'space-mono' },
  iconNavigate: {
    position: 'absolute',
    top: 25,
    right: 25
  },
  inputContainer: {
    // paddingLeft: 8,
    alignSelf: 'center',
    borderRadius: 40,
    borderWidth: 1,
    height: 45,
    marginVertical: 10,
    width: SCREEN_WIDTH * 0.8
  },
  inputStyle: {
    flex: 1,
    marginLeft: 10,
    // fontFamily: 'light',
    fontSize: 16
  },
  removeButton: {
    backgroundColor: 'red',
    borderRadius: 0,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  row: {
    width: '100%',
    flexDirection: 'row'
  },
  rowItem: {
    padding: 5
  },
  rowCheckBox: {
    flex: 1
  },
  rowTitle: {
    flex: 4,
    justifyContent: 'center'
  },
  rowText: {
    fontSize: 20
  },
  textCenter: {
    textAlign: 'center'
  },
  verticalCenter: {
    justifyContent: 'center'
  }
})

export default styles
