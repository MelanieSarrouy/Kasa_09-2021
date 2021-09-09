import React from 'react'
import { NavLink } from 'react-router-dom'

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <main className='notFound__main'>
          <h1 className='notFound__main__404'>404</h1>
          <h2 className='notFound__main__oups'>Oups! La page que vous demandez n'existe pas.</h2>
          <NavLink exact to='/' className='notFound__main__return'>
            Retourner sur la page d'accueil
          </NavLink>
        </main>
      </div>
    )
  }
}

export default NotFound