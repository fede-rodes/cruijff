import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import Text from '../Text'
import Api from '../../Services/SeedorfApi'
import Colors from '../../Themes/Colors'
import moment from 'moment'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import styled from 'styled-components'
import I18n from '../../I18n'

export default class GameListCard extends Component {
  static propTypes = {
    game: PropTypes.object,
    style: View.propTypes.style
  }

  render () {
    const game = this.props.game
    const spot = this.props.game.spot

    let attendingUsers = game.attendees
      .filter(rsvp => rsvp.status === 'attending')
      .map(rsvp => rsvp.user)

    const nOpenSpots = game.capacity - attendingUsers.length

    return (
      <Container>
        <Left>
          <Text.L>{moment(game.startTime).format('D')}</Text.L>
          <Text.M>{moment(game.endTime).format('MMM')}</Text.M>
        </Left>
        <Right>
          <SpotImageContainer>
            <SpotImage source={{ uri: spot.images[0].image }} />
          </SpotImageContainer>
          <Overlay>
            <Top>
              <MaterialIcon color={Colors.white} name='flag' />
              <Title>{game.spot.name}</Title>
            </Top>
            <Bottom>
              <WhiteSM>
                {moment(game.startTime).format('HH')}-
                {moment(game.endTime).format('HH')} ·{' '}
                {I18n.t(game.sport.category)} ·&nbsp;
              </WhiteSM>
              <OrangeSM>
                {nOpenSpots > 0
                  ? `${nOpenSpots} ${I18n.t('players needed')}`
                  : I18n.t('full')}
              </OrangeSM>
            </Bottom>
          </Overlay>
        </Right>
      </Container>
    )
  }
}

const HorizontalView = styled.View`
  flex-direction: row;
`

const Container = styled(HorizontalView)`
  height: 100px;
`

const Left = styled.View`
  flex: 1;
`

const Right = styled.View`
  flex: 3;
`
const SpotImage = styled.Image`
  height: 100px;
  width: 100%;
  border-radius: 8px;
`

const SpotImageContainer = styled.View`
  border-radius: 8px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`

const Overlay = styled.View`
  justify-content: space-between;
  flex: 1;
`

const Top = styled.View`
  padding-left: 8px;
  height: 25px;
  flex-direction: row;
  align-items: center;
`

const Title = styled(Text.M)`
  color: ${Colors.white};
  margin-left: 8px;
`

const WhiteSM = styled(Text.SM)`
  color: ${Colors.white};
`

const OrangeSM = styled(Text.SM)`
  color: ${Colors.actionYellow};
`

const Bottom = styled.View`
  height: 35px;
  padding-left: 8px;
  background-color: ${Colors.greenSemi};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  flex-direction: row;
  align-items: center;
`
