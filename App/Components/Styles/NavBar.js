import { StyleSheet } from 'react-native'
import Fonts from '../../Themes/Fonts'
import Colors from '../../Themes/Colors'

export const navbarStyle = StyleSheet.create({
  container: {
    height: 70,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: Colors.transparent
    // borderWidth: 1,
    // borderColor: 'red'
  },
  buttonContainer: {
    flex: 1,
    height: 50
    // borderWidth: 1,
    // borderColor: 'green',
    // flexDirection: 'column',
    // alignItems: 'stretch'
  }
})
