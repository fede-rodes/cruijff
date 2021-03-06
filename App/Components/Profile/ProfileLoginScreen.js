import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import DefaultButton from '../DefaultButton'
import I18n from '../../I18n/index'
import Text from '../Text'
import images from '../../Themes/Images'
import styled from 'styled-components/native'
import userActions from '../../Redux/UserRedux'
import { connect } from 'react-redux'

class _ProfileLoginScreen extends Component {
  componentWillMount () {
    if (this.props.user) {
      this.props.navigation.navigate('LoggedInProfileNav')
    }
  }
  render () {
    return (
      <MainContainer>
        <View style={{ alignItems: 'center' }}>
          <Image source={images.createProfileAvatar} />
          <View style={{ height: 32 }} />
          <Text.L>{I18n.t('Sign up')}!</Text.L>
          <View style={{ height: 32 }} />
          <Text.M>{I18n.t('Sign up and start sporting')}</Text.M>
        </View>
        <ButtonContainer>
          <DefaultButton
            onPress={() => this.props.navigation.navigate('StackSignupScreen')}
            text={I18n.t('Register')}
          />
        </ButtonContainer>
      </MainContainer>
    )
  }
}

const dispatchToProps = {
  login: userActions.login,
  logout: userActions.logout
}

const mapStateToProps = state => ({
  user: state.user
})

const ProfileLoginScreen = connect(mapStateToProps, dispatchToProps)(
  _ProfileLoginScreen
)
export default ProfileLoginScreen

const MainContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const ButtonContainer = styled.View`
  align-self: stretch;
`
