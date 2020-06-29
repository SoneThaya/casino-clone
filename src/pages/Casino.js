import React from 'react'
import {host_sm} from '../images/host_sm.jpg'

const Casino = () => {
  return (
    <div className="container">
        <div className='casino-info'>
          <h2>TABLE MOUNTAIN CASINO OFFERS YOUR FAVORITES IN GAMING FUN!</h2>
          <h3>We feature over 2,000 Slots, 40 Table Games, 10 Poker Tables and a 700-seat Bingo Hall.</h3>
          <p>Be an instant Winner with <strong>Massive Cash</strong>, our exclusive in-house <strong>Jackpot!</strong> Did you know at <strong>Table Mountain Casino</strong>, Club members are eligible for even more winning? Slot players can win this random Massive Cash Jackpot, paying anywhere from $50,000 to $150,000, simply by playing with their Club Card! Start playing today and YOU could be our newest Massive Cash Jackpot Winner!</p>
      </div>
      <div className="casino-images">
        <img src={host_sm} alt='host' />
      </div>
    </div>
    
  )
}

export default Casino;