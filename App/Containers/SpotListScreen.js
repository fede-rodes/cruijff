import React, { Component } from 'react'
import { TouchableHighlight, ActivityIndicator } from 'react-native'
import { Container, Content } from 'native-base'

import SpotListCard from '../Components/SpotListCard'
import Api from '../Services/FixtureApi'

// TODO: Implement blank screen if no spots were found

export default class SpotListScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      spots: null,
      isLoading: true
    }
  }

  componentDidMount () {
    const { data } = Api.getAllSpots()
    this.setState({ isLoading: false, spots: data })
  }

  render () {
    const { navigate } = this.props.navigation
    const { isLoading, spots } = this.state

    if (isLoading) {
      return (
        <Container>
          <Content>
            <ActivityIndicator />
          </Content>
        </Container>
      )
    }

    return (
      <Container>
        <Content>
          {spots.map(spot => (
            <TouchableHighlight
              key={spot.id}
              onPress={() => navigate('SpotDetailsScreen', { spotId: spot.id })}
            >
              <SpotListCard spot={spot} />
            </TouchableHighlight>
          ))}
        </Content>
      </Container>
    )
  }
}
