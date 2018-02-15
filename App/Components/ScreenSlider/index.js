import { FlatList, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Footer from './Footer'

// hotfix: https://github.com/facebook/react-native/issues/16710
const itemVisibleHotfix = { itemVisiblePercentThreshold: 100 }

class ScreenSlider extends Component {
  static propTypes = {
    renderItem: PropTypes.func,
    keyExtractor: PropTypes.func,
    data: PropTypes.array,
    showNext: PropTypes.bool,
    showDone: PropTypes.bool,
    onDone: PropTypes.func
  }

  static defaultProps = {
    renderItem: item => <Text>{JSON.stringify(item)}</Text>,
    keyExtractor: (item, index) => index,
    data: ['No data'],
    alterBottomColor: true,
    showNext: true,
    showDone: true
  }

  constructor () {
    super()

    this.state = {
      currentPage: 0
    }
  }

  onSwipePageChange = ({ viewableItems }) => {
    if (viewableItems[0]) {
      this.setState({ currentPage: viewableItems[0].index })
    }
  }

  goNext = () => {
    this.flatList.scrollToIndex({
      animated: true,
      index: this.state.currentPage + 1
    })
  }

  keyExtractor = (item, index) => index

  render () {
    const { data, showNext, showDone } = this.props

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center'
        }}
      >
        <FlatList
          data={this.props.data}
          renderItem={this.props.renderItem}
          keyExtractor={this.props.keyExtractor}
          ref={list => {
            this.flatList = list
          }}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={this.onSwipePageChange}
          viewabilityConfig={itemVisibleHotfix}
          initialNumToRender={1}
        />
        <Footer
          showNext={showNext}
          showDone={showDone}
          numPages={data.length}
          currentPage={this.state.currentPage}
          onNext={this.goNext}
        />
      </View>
    )
  }
}

export default ScreenSlider
