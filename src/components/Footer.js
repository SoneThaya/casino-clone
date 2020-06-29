import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="social-container">
        <FaFacebook size={25} />
        <FaTwitter size={25} />
        <FaInstagram size={25} /> | <FaMapMarkerAlt size={25} /> Only 15 Minutes from Fresno
      </div>
      <div className="list-container">
        <li>
          Win/Lost Statement
        </li>
        <li>
          Responsible Gaming
        </li>
        <li>
          Privacy Policy
        </li>
        <li>
          Contact Us
        </li>
        <li>
          Location
        </li>
        <li>
          Careers
        </li>
        <li>
          General Info
        </li>
        <li>
          Gift Shop
        </li>
        <li>
          Search
        </li>
      </div>
    </div>
  )
}

export default Footer