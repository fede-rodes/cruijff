/* Card component, this is the Card that is used in a list of many Cards */

import React, { Component } from 'react'
import { Image, View } from 'react-native'
import PropTypes from 'prop-types'

import { card } from './Styles/CardStyles'
import Header from './Header'

export default class SpotListCard extends Component {
  static propTypes = {
    spot: PropTypes.object,
    style: PropTypes.number
  }

  /* forward setNativeProps to the root (View) so that Card can be used as Touchable */
  setNativeProps = nativeProps => {
    this._root.setNativeProps(nativeProps)
  }

  componentWillMount () {
    this.distance = 5
  }

  render () {
    const spot = this.props.spot

    const image =
      spot.images.length > 0
        ? spot.images[0].image
        : 'https://raw.githubusercontent.com/SportySpots/cruijff/graphql/App/Images/spot-placeholder.png'

    return (
      <View style={[card.container, this.props.style]}>
        <Image style={card.image} source={{ uri: image }} />
        <Header spot={spot} style={card.bottom} />
      </View>
    )
  }
}
