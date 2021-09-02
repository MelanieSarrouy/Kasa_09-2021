import React from 'react'
import logo from '../assets/logo.svg'
import Navigation from './Navigation'


const Header = () => {
  return (
    <div className='header'>
      <img src={logo} className="header__logo" alt="logo" />
      <Navigation />
    </div>
  )
}

export default Header;