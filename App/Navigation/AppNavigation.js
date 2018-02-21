import { StackNavigator } from 'react-navigation'

import styles from './Styles/NavigationStyles'
import SplashScreen from '../Containers/SplashScreen'
import LocationPermissionScreen from '../Containers/LocationPermissionScreen'
import OnboardingScreen from '../Components/Onboarding'
import { DefaultNav, MainScreen } from './MainNavigator'

const RootNav = StackNavigator(
  {
    LocationPermissionScreen: { screen: LocationPermissionScreen },
    OnboardingScreen: { screen: OnboardingScreen },
    SplashScreen: { screen: SplashScreen },
    DefaultNav: { screen: MainScreen }
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'SplashScreen',
    navigationOptions: {
      headerStyle: styles.header
    }
  }
)

export default RootNav
