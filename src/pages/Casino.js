import React from 'react'
import host from '../images/host_sm.jpg'
import slots from '../images/slots_sm.jpg'
import tables from '../images/table_games_sm.jpg'
import winners from '../images/winners_sm.jpg'
import {ArticleStyles} from '../styles/Styles'

const Casino = () => {
  return (
    <ArticleStyles>
    <div className="container">
        <div className='article-info'>
          <h2>TABLE MOUNTAIN CASINO OFFERS YOUR FAVORITES IN GAMING FUN!</h2>
          <h3>We feature over 2,000 Slots, 40 Table Games, 10 Poker Tables and a 700-seat Bingo Hall.</h3>
          <p>Be an instant Winner with <strong>Massive Cash</strong>, our exclusive in-house <strong>Jackpot!</strong> Did you know at <strong>Table Mountain Casino</strong>, Club members are eligible for even more winning? Slot players can win this random Massive Cash Jackpot, paying anywhere from $50,000 to $150,000, simply by playing with their Club Card! Start playing today and YOU could be our newest Massive Cash Jackpot Winner!</p>
      </div>
      <div className="article-images">
        <img src={host} alt='host' />
        <img src={slots} alt='slots' />
        <img src={tables} alt='tables' />
        <img src={winners} alt='winners' />
      </div>
    </div>
    </ArticleStyles>
  )
}

export default Casino;