import React from 'react'
import { NavLink } from 'react-router-dom'

class Navigation extends React.Component {
  render() {
    return (
      <div className='navigation'>
        <NavLink exact to='home' activeClassName='nav-active'>
          Accueil
        </NavLink>
        <NavLink exact to='a-propos' activeClassName='nav-active'>
          À Propos
        </NavLink>
      </div>
    )
  }
}

export default Navigation