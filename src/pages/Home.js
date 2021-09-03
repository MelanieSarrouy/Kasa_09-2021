import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className='home'>
      <div className='bloc_page'>
        <Header />
        <Banner />
      </div>
      <Footer />
    </div>
  )
}

export default Home