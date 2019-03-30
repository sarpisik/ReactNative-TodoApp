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
    height: 48,
    justifyContent: 'center'
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '15%',
    maxHeight: 75,
    justifyContent: 'space-between',
    paddingHorizontal: 0,
    paddingTop: 25
  },
  headerText: { fontSize: 30, fontFamily: 'Ubuntu-medium' },
  icon: { paddingHorizontal: 15 },
  iconLeft: {
    paddingLeft: 20 // Equal to checkbox
  },
  iconRight: {
    paddingRight: 20 // Equal to checkbox
  },
  input: { padding: 15, flex: 1 },
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
    marginLeft: 10
  },
  inputKeyboardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  removeButton: {
    borderTopWidth: 1,
    borderRadius: 0
  },
  row: {
    width: '100%',
    flexDirection: 'row'
  },
  rowIcon: {
    flex: 1
  },
  rowTitle: {
    justifyContent: 'center'
  },
  rowText: {
    fontFamily: 'Ubuntu',
    fontSize: 25,
    paddingVertical: 10 // Equal to input style
  },
  textCenter: {
    textAlign: 'center'
  },
  verticalCenter: {
    justifyContent: 'center'
  }
})

export default styles
