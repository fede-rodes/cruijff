import React from 'react'
import I18n from '../I18n'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { navbarStyle } from './Styles/NavBar'
import NavBarButton from './NavBarButton'

import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MaterialCummunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const icons = {
  find: {
    set: MaterialIcon,
    name: 'search'
  },
  join: {
    set: MaterialIcon,
    name: 'person-add'
  },
  plan: {
    set: MaterialCummunityIcon,
    name: 'soccer'
  },
  profile: {
    set: MaterialIcon,
    name: 'account-circle'
  },
  settings: {
    set: MaterialIcon,
    name: 'settings'
  }
}

export default class NavBar extends React.Component {
  static propTypes = {
    buttonText: PropTypes.string
  }

  static defaultProps = {}

  render () {
    return (
      <View style={navbarStyle.container}>
        <View style={navbarStyle.buttonContainer}>
          <NavBarButton icon={icons.find} buttonText={I18n.t('find')} />
        </View>
        <View style={navbarStyle.buttonContainer}>
          <NavBarButton icon={icons.join} buttonText={I18n.t('join')} />
        </View>
        <View style={navbarStyle.mainButtonContainer}>
          <NavBarButton
            main
            icon={icons.plan}
            buttonText={I18n.t('plan-a-game')}
          />
        </View>
        <View style={navbarStyle.buttonContainer}>
          <NavBarButton icon={icons.profile} buttonText={I18n.t('profile')} />
        </View>
        <View style={navbarStyle.buttonContainer}>
          <NavBarButton icon={icons.settings} buttonText={I18n.t('settings')} />
        </View>
      </View>
    )
  }
}
