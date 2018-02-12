import React, { Component } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'

import FieldBackground from '../Components/FieldBackground'
import Logo from '../Components/Logo'
import RoundedButton from '../Components/RoundedButton'
import styles from './Styles/SplashScreenStyles'
import Fonts from '../Themes/Fonts'

export default class SplashScreen extends Component {
  render () {
    const { navigate } = this.props.navigation

    return (
      <FieldBackground>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={styles.facebookActionContainer}>
          <RoundedButton onPress={() => navigate('DefaultNav')}>
            Login using Facebook
          </RoundedButton>
        </View>
        <View style={styles.skipActionContainer}>
          <TouchableHighlight onPress={() => navigate('OnboardingScreen')}>
            <Text>I'll do this later</Text>
          </TouchableHighlight>
        </View>
      </FieldBackground>
    )
  }
}