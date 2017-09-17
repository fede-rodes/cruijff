import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../../Themes/'

export default StyleSheet.create({
  container: {
    // flex: .5, //for now
    backgroundColor: '#fff',
    // height: 500
  },
  bottom: {
    flex: 1,
    paddingLeft: '5%',
    paddingRight: '10%',
    paddingTop: '5%',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc'
  },
  name: {
    fontSize: 30,
    fontFamily: 'Rajdhani-Bold'
  },
  distanceText: {
    fontFamily: 'Rajdhani-Bold',
    fontSize: 16,
    color: '#c1c1c1',
    paddingLeft: 10
  }
});