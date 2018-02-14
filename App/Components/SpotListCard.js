import React, { Component } from 'react'
import { Image, Text } from 'react-native'
import PropTypes from 'prop-types'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Body, Card, CardItem, Left, Right } from 'native-base'
import Fonts from '../Themes/Fonts'
import Colors from '../Themes/Colors'

import styles from './Styles/SpotListCardStyles'

export default class SpotListCard extends Component {
  /* forward setNativeProps to the root (Card) so that SpotListCard can be used as Touchable */
  setNativeProps = nativeProps => {
    this._root.setNativeProps(nativeProps)
  }

  static propTypes = {
    spot: PropTypes.object
  }

  render () {
    const spot = this.props.spot

    return (
      <Card style={styles.cardContainer}>
        <CardItem>
          <Body>
            <Text style={Fonts.style.h4}>{spot.label}</Text>
            <Text note>Spot Address</Text>
          </Body>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri: spot.image
                ? spot.image
                : 'https://img.aws.livestrongcdn.com/ls-article-image-673/ds-photo/getty/article/108/170/480138677.jpg'
            }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Icon
              name='star'
              color={Colors.secondaryGreen}
              size={Fonts.size.regular}
            />
            <Icon
              name='star'
              color={Colors.secondaryGreen}
              size={Fonts.size.regular}
            />
            <Icon
              name='star'
              color={Colors.secondaryGreen}
              size={Fonts.size.regular}
            />
            <Icon
              name='star'
              color={Colors.secondaryGreen}
              size={Fonts.size.regular}
            />
            <Icon
              name='star'
              color={Colors.secondaryGreen}
              size={Fonts.size.regular}
            />
          </Left>
          <Body style={styles.labelsContainer}>
            <Text style={styles.label}>{spot.sport.toLowerCase()}</Text>
          </Body>
          <Right style={styles.labelsContainer}>
            <Text style={styles.label}>
              {Math.floor(Math.random() * 20)} games
            </Text>
          </Right>
        </CardItem>
      </Card>
    )
  }
}
