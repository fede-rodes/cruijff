import React from 'react'
import I18n from '../I18n'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { navbarStyle } from './Styles/NavBar'
import Text from './Text'
import NavBarButton from './NavBarButton'

export default class NavBar extends React.Component {
  static propTypes = {
    buttonText: PropTypes.string
  }

  static defaultProps = {}

  render () {
    return (
      <View style={navbarStyle.container}>
        <View style={navbarStyle.buttonContainer}>
          <NavBarButton />
        </View>
        <View style={navbarStyle.buttonContainer}>
          <NavBarButton />
        </View>
        <View style={[navbarStyle.buttonContainer, { flex: 2, height: 70 }]}>
          <NavBarButton main />
        </View>
        <View style={navbarStyle.buttonContainer}>
          <NavBarButton />
        </View>
        <View style={navbarStyle.buttonContainer}>
          <NavBarButton />
        </View>
      </View>
    )
  }
}
