/* Card component, this is the Card that is used in a list of many Cards */

import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

import { cardDetails } from './Styles/CardStyles'
import ImageSwiper from '../ImageSwiper'
import Header from './Header'
import Properties from './Properties'

export default class extends React.PureComponent {
  static propTypes = {
    spot: PropTypes.object,
    style: PropTypes.number
  }

  componentWillMount () {
    this.distance = 5
  }

  render () {
    const spot = this.props.spot

    let images = ['http://via.placeholder.com/350x150']
    if (typeof spot.image === 'string') {
      images = [spot.image]
    } else if (typeof spot.image === 'object' && spot.length) {
      images = spot.image
    }

    return (
      <View style={[cardDetails.container, this.props.style]}>
        <ImageSwiper style={cardDetails.slider} images={images} />
        <Header spot={spot} style={cardDetails.bottom} />
        <Properties properties={spot.attributes} />
      </View>
    )
  }
}
