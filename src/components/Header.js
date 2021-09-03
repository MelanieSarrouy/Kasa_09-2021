import React from 'react'
import logo from '../assets/logoHeader.svg'
import Navigation from './Navigation'


const Header = () => {
  return (
    <div className='header'>
      <img src={logo} className="header-logo" alt="logo" />
      <Navigation />
    </div>
  )
}

export default Header;