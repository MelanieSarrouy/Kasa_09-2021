import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Cards from '../components/Cards'

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <div className='bloc_page'>
          <Header />
          <Banner />
          <Cards />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home