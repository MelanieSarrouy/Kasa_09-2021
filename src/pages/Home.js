import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Background from '../assets/Background.jpg'

const Home = () => {
  return (
    <div>
      <Header />
      <img src={Background} alt='arrière-plan paysage' className='home__img' />
      <h1 className='home__title'>Chez vous, partout et ailleurs</h1>
      <Footer />
    </div>
  )
}

export default Home