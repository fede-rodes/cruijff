import React from 'react'
import { Animated, PanResponder, View, StyleSheet } from 'react-native'
import Text from './Text'
import Colors from '../Themes/Colors'

const handleSize = 25

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
        console.log('release')
        console.log(this.state.pan)
        this.state.pan.flattenOffset()
        // clamp the value between 0 and width (minus handleWidth)
        this.state.pan.setValue(
          Math.max(Math.min(this.maxX(), this.state.pan._value), this.minX())
        )
        console.log(
          (this.state.pan._value - handleSize / 2) /
            (this.state.width - handleSize)
        )
      }
    })
  }

  minX () {
    return handleSize / 2
  }
  maxX () {
    return this.state.width - handleSize / 2
  }

  render () {
    const x = this.state.pan.interpolate({
      inputRange: [this.minX(), this.maxX()],
      outputRange: [this.minX(), this.maxX()],
      extrapolate: 'clamp'
    })

    console.log(x, this.minX(), this.maxX())

    return (
      <View
        onLayout={e => this.setState({ width: e.nativeEvent.layout.width })}
        style={{ flex: 1, justifyContent: 'center' }}
      >
        <View style={style.scaleContainer}>
          <View style={style.scale} />
        </View>
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[style.handleContainer, { transform: [{ translateX: x }] }]}
        >
          <View style={style.handle} />
        </Animated.View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  scaleContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderLeftColor: Colors.actionYellow,
    borderLeftWidth: 5,
    borderRightColor: Colors.actionYellow,
    borderRightWidth: 5
  },
  scale: {
    flex: 1,
    height: 5,
    backgroundColor: Colors.actionYellow
  },
  handleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    left: -50,
    width: 100
  },
  handle: {
    width: handleSize,
    height: handleSize,
    backgroundColor: Colors.black,
    borderRadius: handleSize
  }
})
