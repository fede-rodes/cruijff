import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Text from './Text'
import I18n from '../I18n'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Slider from './Slider'
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger
} from 'react-native-popup-menu'
import { TabBarTop, TabNavigator } from 'react-navigation'
import Colors from '../Themes/Colors'

export const BottomNav = TabNavigator(
  {
    spots: {
      screen: () => <Text>spots</Text>
    },
    games: {
      screen: () => <Text>games</Text>
    }
  },
  {
    tabBarComponent: TabBarTop,
    tabBarPosition: 'top',
    tabBarOptions: {
      style: {
        backgroundColor: Colors.white
      },
      labelStyle: {
        color: 'black'
      },
      indicatorStyle: {
        backgroundColor: Colors.primaryGreen,
        height: 4
      }
    },
    initialRouteName: 'spots'
  }
)

export default class ProfileDetailsScreen extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.any,
    logout: PropTypes.func,
    facebook: PropTypes.shape({
      status: PropTypes.string,
      data: PropTypes.shape({
        declinedPermission: PropTypes.array,
        grantedPermissions: PropTypes.array,
        token: PropTypes.shape({
          accessToken: PropTypes.string,
          userID: PropTypes.string
        })
      })
    })
  }

  componentWillMount () {
    if (this.props.facebook.status !== 'SUCCESS') {
      this.props.navigation.navigate('ProfileLoginScreen')
    }
  }
  componentWillReceiveProps () {
    if (this.props.facebook.status === 'SUCCESS') {
      this.props.navigation.navigate('ProfileLoginScreen')
    }
  }

  render () {
    if (
      this.props.facebook.status !== 'SUCCESS' ||
      !this.props.facebook.data.token ||
      !this.props.facebook.data.profile
    ) {
      return null
    }

    const EditMenu = (
      <View style={styles.editMenu}>
        <Menu name='popup'>
          <MenuTrigger menuName='popup'>
            <Icon size={24} name='more-vert' />
          </MenuTrigger>
          <MenuOptions>
            <MenuOption
              onSelect={() =>
                this.props.navigation.navigate('ProfileEditScreen')
              }
            >
              <Text.M>{I18n.t('Edit')}</Text.M>
            </MenuOption>
            <MenuOption disabled />
            <MenuOption onSelect={() => this.props.logout()}>
              <Text.M style={{ color: 'red' }}>Log out</Text.M>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>
    )

    const imageUrl = `https://graph.facebook.com/${
      this.props.facebook.data.token.userID
    }/picture?type=large`
    return (
      <MenuProvider>
        <View style={styles.outerContainer}>
          {EditMenu}
          <View style={styles.center}>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text.L>{this.props.facebook.data.profile.name}</Text.L>
          </View>
          <View style={styles.ageTypeContainer}>
            <View style={styles.ageContainer}>
              <Text>{I18n.t('Age')}</Text>
              <Text.L>30</Text.L>
            </View>
            <View style={styles.type}>
              <Text>{I18n.t('Style')}</Text>
              <Slider disabled value={0.5} onChange={console.log} />
            </View>
          </View>
          <View style={styles.bottomNavContainer}>
            <BottomNav style={{ flex: 1 }} />
          </View>
        </View>
      </MenuProvider>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 100
  },
  center: {
    alignItems: 'center'
  },
  outerContainer: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: Colors.white
  },
  ageTypeContainer: {
    flexDirection: 'row',
    marginHorizontal: 16
  },
  ageContainer: {
    flex: 2
  },
  type: {
    flex: 3
  },
  editMenu: {
    position: 'absolute',
    right: 8,
    top: 8
  },
  bottomNavContainer: {
    flex: 1,
    borderTopWidth: 2,
    borderTopColor: Colors.bgGrey,
    backgroundColor: Colors.bgGrey
  }
})
