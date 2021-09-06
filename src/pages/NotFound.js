import React from 'react'
import Header from '../components/Header'
import { NavLink } from 'react-router-dom'
import Footer from '../components/Footer'

class NotFound extends React.Component {
  render() {
    return (
      <div className='notFound'>
        <div className='bloc_page'>
          <Header />
          <main className='notFound__main'>
            <h1 className='notFound__main__404'>404</h1>
            <h2 className='notFound__main__oups'>Oups! La page que vous demandez n'existe pas.</h2>
            <NavLink exact to='/' className='notFound__main__return'>
              Retourner sur la page d'accueil
            </NavLink>
          </main>
        </div>
        <Footer />
      </div>
    )
  }
}

export default NotFound;