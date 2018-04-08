import React from 'react'
import { StackNavigator } from 'react-navigation'

import SplashScreen from '../Containers/SplashScreen'
import OnboardingScreen from '../Components/Onboarding'
import {
  GameSearchNav,
  PlanGameNav,
  ProfileNav,
  SettingsNav,
  SpotSearchNav
} from './MainNavigator'
import AskLocation from '../Containers/AskLocation'
import SignupScreen from '../Components/Signup'
import { View } from 'react-native'
import NavBar from '../Components/NavBar'

const withNavBar = Navigator => {
  const navigator = props => (
    <View style={{ flex: 1 }}>
      <Navigator {...props} />
      <NavBar {...props} />
    </View>
  )
  navigator.router = Navigator.router
  return navigator
}

export const RootNav = StackNavigator(
  {
    LocationPermissionScreen: { screen: AskLocation },
    OnboardingScreen: { screen: OnboardingScreen },
    SplashScreen: { screen: SplashScreen },
    PlanScreen: { screen: PlanGameNav },
    SignupScreen: { screen: SignupScreen },
    SpotSearchTab: { screen: withNavBar(SpotSearchNav) },
    GameSearchTab: { screen: withNavBar(GameSearchNav) },
    ProfileTab: { screen: withNavBar(ProfileNav) },
    SettingsTab: { screen: withNavBar(SettingsNav) }
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'SplashScreen'
  }
)

export default RootNav
