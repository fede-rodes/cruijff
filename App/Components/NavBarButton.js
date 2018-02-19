import React from 'react'
import I18n from '../I18n'
import {
  TouchableHighlight,
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'
import { navbarStyle } from './Styles/NavBar'
import Text from './Text'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../Themes/Colors'

export default class NavBarButton extends React.Component {
  static propTypes = {
    buttonText: PropTypes.string,
    onPress: PropTypes.func,
    main: PropTypes.bool
  }

  static defaultProps = {}

  onPress = () => {
    this.props.onPress && this.props.onPress()
  }

  render () {
    return (
      <TouchableOpacity style={{ flex: 1 }} onPress={this.onPress}>
        <View
          style={[
            navbarButtonStyle.button,
            this.props.main && navbarButtonStyle.mainButton
          ]}
        >
          <Icon name='chevron-right' size={25} color='black' />
          <Text>bla</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const navbarButtonStyle = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainButton: {
    backgroundColor: Colors.primaryGreen
  }
})
