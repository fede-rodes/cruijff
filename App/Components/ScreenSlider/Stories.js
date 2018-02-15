import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { Dimensions, View } from 'react-native'
import Footer from './Footer'
import ScreenSlider from './index'

const data = [1, 2, 3]
const colors = ['#f00', '#f00', '#0f0', '#00f']

storiesOf('Screenslider')
  .add('Footer', () => <Footer numPages={5} currentPage={2} />)

  .add('ScreenSlider', () => (
    <ScreenSlider
      data={data}
      renderItem={({ item }) => (
        <View
          style={{
            flex: 1,
            width: Dimensions.get('window').width,
            backgroundColor: colors[item]
          }}
        />
      )}
    />
  ))
