import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Gallery from '../components/Gallery'
import Section1 from '../components/Section1'
import Background from '../assets/IMG.jpg'
const title = 'Chez vous, partout et ailleurs'



class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <div className='bloc_page'>
          <Header />
          <Section1 
            picture={Background}
            title={title}
          />
          <Gallery />
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home