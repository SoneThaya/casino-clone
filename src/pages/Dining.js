import React from 'react';
import cafe from '../images/tm_cafe_sm.jpg'

const Dining = () => {
  return (
    <div>
      <div className="dining-info">
        <h2>A DEAL OF A MEAL AND AN INCREDIBLE DINING EXPERIENCE!</h2>
        <p>From a fresh, quick sandwich to a never-ending buffet, we have the perfect dining option for you! We’re always bringing you the best in casual and elegant dining, and new buffet specials that will keep you coming back for more.</p>
      </div>
      <img src={cafe} alt='cafe' />
    </div>
  )
}

export default Dining;