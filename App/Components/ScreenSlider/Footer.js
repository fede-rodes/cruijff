import React from 'react'
import I18n from '../../I18n'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import NavDots from '../NavDots'
import { style, navDotsTheme } from './style/style'
import ContinueButton from './ContinueButton'

export default class Footer extends React.Component {
  static propTypes = {
    numPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onNext: PropTypes.func
  }

  onNext = () => {
    this.props.onNext && this.props.onNext()
  }

  render () {
    return (
      <View style={style.container}>
        <NavDots
          count={this.props.numPages}
          active={this.props.currentPage}
          theme={navDotsTheme}
          style={style.navDots}
        />
        <ContinueButton
          text={I18n.t('continue')}
          style={style.continueButton}
          onPress={this.onNext}
        />
      </View>
    )
  }
}
