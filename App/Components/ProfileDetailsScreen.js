import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import Text from './Text'
import I18n from '../I18n'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from '../Themes/Colors'
import Slider from './Slider'

const BasicButton = props => {
  const { text, ...otherProps } = props
  return (
    <TouchableOpacity {...otherProps}>
      <View style={basicButtonStyle.button}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const basicButtonStyle = StyleSheet.create({
  button: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.black,
    paddingHorizontal: 16,
    paddingVertical: 4
  }
})

class EditMenu extends React.PureComponent {
  static propTypes = {
    style: PropTypes.any
  }

  constructor () {
    super()
    this.state = { expanded: false }
  }

  toggle = () => this.setState({ expanded: !this.state.expanded })

  render () {
    const { text, ...props } = this.props
    if (this.state.expanded) {
      return <BasicButton text={text} {...props} />
    }
    return (
      <TouchableOpacity {...props} onPress={this.toggle}>
        <Icon size={24} name='more-vert' />
      </TouchableOpacity>
    )
  }
}

export default class ProfileDetailsScreen extends React.PureComponent {
  static propTypes = {
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

  render () {
    if (this.props.facebook.status === 'SUCCESS') {
      const imageUrl = `https://graph.facebook.com/${
        this.props.facebook.data.token.userID
      }/picture?type=large`
      return (
        <View style={styles.outerContainer}>
          <EditMenu style={styles.editMenu} text={I18n.t('Edit profile')} />
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
              <Slider minValue={0} maxValue={100} />
            </View>
          </View>
          <View>
            <Text>{JSON.stringify(this.props.facebook)}</Text>
          </View>
        </View>
      )
    }
    return (
      <View>
        <Text>ProfileDetailsScreen</Text>
        <Text>{JSON.stringify(this.props.facebook)}</Text>
      </View>
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
    flex: 1
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
    right: 8
  }
})
