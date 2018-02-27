import React from 'react'
import { Animated, PanResponder, View } from 'react-native'
import Text from './Text'

export default class extends React.Component {
  constructor () {
    super()
    this.state = {
      pan: new Animated.Value(0),
      width: 100
    }

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset(this.state.pan._value)
      },
      onPanResponderMove: Animated.event([null, { dx: this.state.pan }]),
      onPanResponderRelease: (e, { vx, vy }) => {
        this.state.pan.flattenOffset()
        // clamp the value between 0 and width
        this.state.pan.setValue(
          Math.max(Math.min(this.state.width, this.state.pan._value), 0)
        )
      }
    })
  }

  render () {
    const x = this.state.pan.interpolate({
      inputRange: [0, this.state.width],
      outputRange: [0, this.state.width],
      extrapolate: 'clamp'
    })

    return (
      <View
        onLayout={a => this.setState({ width: a.nativeEvent.layout.width })}
        style={{ flex: 1, backgroundColor: 'red' }}
      >
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: 'green'
          }}
        />
        <Animated.View
          {...this.panResponder.panHandlers}
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            transform: [{ translateX: x }],
            backgroundColor: 'transparent',
            left: -50,
            width: 100
          }}
        >
          <View style={{ width: 10, backgroundColor: 'blue' }} />
        </Animated.View>
      </View>
    )
  }
}
