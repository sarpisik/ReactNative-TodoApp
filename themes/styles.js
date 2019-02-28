import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerButton: {
    alignItems: 'center',
    height: 48,
    justifyContent: 'center',
    paddingRight: 5,
    width: 40
  },
  headerContainer: {
    alignItems: 'center',
    height: '15%',
    maxHeight: 75,
    justifyContent: 'center',
    paddingHorizontal: 0,
    paddingTop: 25
  },
  headerText: { fontWeight: 'bold', fontSize: 25, fontFamily: 'space-mono' },
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
