import React from 'react'
import platinum from '../images/club-platinum.png'
import player from '../images/club-players.png'
import preferred from '../images/club-preferred.png'
import premium from '../images/club-premium.png'
import veteran from '../images/club-veteran.png'

const Club = () => {
  return (
    <div className='club-container'>
      <div className="club-info">
        <h2>JOIN THE CLUB & WIN UP TO $2,000</h2>
        <h3>As the Valley’s Most Rewarding Casino, you’ll experience the many perks of being a valued Club Member.</h3>
        <p>Enjoy rewards that include:</p>
        <ul>
          <li>Special Dining Offers</li>
          <li>Birthday Gifts</li>
          <li>Discounts on Entertainment Tickets</li>
          <li>Monthly Slot or Table Game Rewards based on play</li>
          <li>Invitations to Exclusive Members-Only Events</li>
        </ul>
        <p>The more you play, the more rewards that come your way! You earn points for every dollar played. By simply using your Club Card when you play, you could be our next big Massive Cash winner, this progressive jackpot is GUARANTEED to hit by $150,000!</p>
        <h3><strong>Membership is FREE and signing up is easy! Visit one of our Club Booths for more information and more details.</strong></h3>
      </div>
      <div className="card-container">
        <img src={player} alt='player' />
        <img src={veteran} alt='veteran' />
        <img src={preferred} alt='preferred' />
        <img src={premium} alt='premium' />
        <img src={platinum} alt='platinum' />
      </div>
    </div>
  )
}

export default Club