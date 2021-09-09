import React from 'react'
import logo from '../assets/logoHeader.svg'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'



class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <Link exact to='home'>
          <img src={logo} className="header-logo" alt="logo" />
        </Link>
        <Navigation />
      </div>
    )
  }
}

export default Header