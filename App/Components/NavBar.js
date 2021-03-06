import React from 'react'
import I18n from '../I18n'
import { View, Keyboard, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import NavBarButton from './NavBarButton'

import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MaterialCummunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../Themes/Colors'

const buttons = [
  {
    buttonText: 'find',
    navigate: 'SpotSearchTab',
    icon: {
      set: MaterialIcon,
      name: 'search'
    }
  },
  {
    buttonText: 'join',
    navigate: 'GameSearchTab',
    icon: {
      set: MaterialIcon,
      name: 'person-add'
    }
  },
  {
    buttonText: 'plan-a-game',
    navigate: 'PlanScreen',
    icon: {
      set: MaterialCummunityIcon,
      name: 'soccer'
    },
    main: true
  },
  {
    buttonText: 'profile',
    navigate: 'ProfileTab',
    icon: {
      set: MaterialIcon,
      name: 'account-circle'
    }
  },
  {
    buttonText: 'settings',
    navigate: 'SettingsTab',
    icon: {
      set: MaterialIcon,
      name: 'settings'
    }
  }
]

export default class NavBar extends React.Component {
  static propTypes = {
    buttonText: PropTypes.string,
    navigation: PropTypes.any // react-navigation object
  }

  static defaultProps = {}

  constructor () {
    super()
    this.state = { keyboardActive: false }
  }

  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow
    )
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide
    )
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  _keyboardDidShow = () => {
    this.setState({ keyboardActive: true })
  }

  _keyboardDidHide = () => {
    this.setState({ keyboardActive: false })
  }

  onButtonPress = button => {
    this.props.navigation.navigate({ routeName: button.navigate })
  }

  render () {
    if (this.state.keyboardActive) {
      return null
    }
    return (
      <View style={navbarStyle.container}>
        {buttons.map((button, index) => (
          <View
            key={index}
            style={
              button.main
                ? navbarStyle.mainButtonContainer
                : navbarStyle.buttonContainer
            }
          >
            <NavBarButton
              onPress={() => this.onButtonPress(button)}
              icon={button.icon}
              buttonText={I18n.t(button.buttonText)}
              active={
                this.props.navigation &&
                this.props.navigation.state.index === index
              }
              main={!!button.main}
            />
          </View>
        ))}
      </View>
    )
  }
}

const navbarStyle = StyleSheet.create({
  container: {
    height: 70,
    marginTop: -20,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: Colors.transparent
  },
  buttonContainer: {
    flex: 1,
    height: 50
  },
  mainButtonContainer: {
    flex: 2,
    height: 70,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  }
})
