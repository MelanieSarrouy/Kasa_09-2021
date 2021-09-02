import React from 'react'
import Header from '../components/Header'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <Header />
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <NavLink exact to='/' activeClassName='nav-active'>
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  )
}

export default NotFound;