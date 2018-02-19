import React from 'react'
import { storiesOf } from '@storybook/react-native'
import NavBar from './NavBar'
import NavBarButton from './NavBarButton'
import { View } from 'react-native'

// import './FieldBackground.story'
// import './Logo.story'
// import './ScreenSlider/Stories.js'
// import './Rating.story'
// import './Cards/Cards.story'
//
//
// import OnBoarding from './OnBoarding'
// import ImageSwiper from './ImageSwiper'
//
// storiesOf('OnBoarding').add('Default', () => <OnBoarding />)
//
// storiesOf('ImageSwiper').add('Default', () => (
//   <ImageSwiper
//     images={[
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv2CxOJIZX-hrhUZzyBcZ8t3_aJ6Zo0VFvs_loZIEpl_SkXUWJ0JeLTf-A',
//       'http://via.placeholder.com/350x150'
//     ]}
//   />
// ))
//

storiesOf('NavBar').add('Default', () => <NavBar />)

storiesOf('NavBar')
  .add('Default', () => (
    <View style={{ flex: 1, backgroundColor: '#aaa' }}>
      <NavBar />
    </View>
  ))
  .add('NavBarButton', () => <NavBarButton />)
