import React from 'react';
import logo from '../assets/logoFooter.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <img src={logo} alt='logo' className='footer__img' />
      <p className='footer__rights'>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer