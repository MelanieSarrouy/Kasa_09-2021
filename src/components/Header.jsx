import React from 'react'
import logo from '../assets/logoHeader.svg'
import Navigation from './Navigation.jsx'
import { Link } from 'react-router-dom'



class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <Link exact to=''>
          <img src={logo} className="header-logo" alt="logo" />
        </Link>
        <Navigation />
      </header>
    )
  }
}

export default Header