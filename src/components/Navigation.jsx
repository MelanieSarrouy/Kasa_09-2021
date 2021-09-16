import React from 'react'
import { NavLink } from 'react-router-dom'

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navigation">
        <NavLink to="" activeClassName="nav-active">
          Accueil
        </NavLink>
        <NavLink to="/a-propos" activeClassName="nav-active">
          À Propos
        </NavLink>
      </nav>
    )
  }
}

export default Navigation
