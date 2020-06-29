import React from 'react';
import { Link } from 'react-router-dom';
import {NavStyles} from '../styles/Styles'

const Navbar = () => {
  return (
   
     
      <div className='nav'>
        <div className='container'>
        <Link to='/'>
          <h1>Casino</h1>
        </Link>
        <nav>
            <Link to='/casino'>Casino</Link>
            <Link to='/club'>Club</Link>
            <Link to='/promotions'>Promotions</Link>
            <Link to='/entertainment'>Entertainment</Link>
            <Link to='/dining'>Dining</Link>
            <Link to='/golf'>Golf</Link>
          </nav>
          </div>
        </div>
      
   
  )
}

export default Navbar;