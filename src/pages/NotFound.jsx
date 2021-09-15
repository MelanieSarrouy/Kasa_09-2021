import React from 'react'
import { NavLink } from 'react-router-dom'

class NotFound extends React.Component {
  render() {
    return (
      <main className="notFound">
        <h1 className="notFound__404">404</h1>
        <h2 className="notFound__oups">
          Oups! La page que vous demandez n'existe pas.
        </h2>
        <NavLink exact to="/" className="notFound__return">
          Retourner sur la page d'accueil
        </NavLink>
      </main>
    )
  }
}

export default NotFound
