import React from 'react'
import Swiper from 'react-native-swiper'
import { Image } from 'react-native'
import PropTypes from 'prop-types'

export default class extends React.PureComponent {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.string)
  }

  render () {
    return (
      <Swiper style={{ flex: 1 }}>
        {this.props.images.map((src, index) => (
          <Image key={index} style={{ flex: 1 }} source={{ uri: src }} />
        ))}
      </Swiper>
    )
  }
}
