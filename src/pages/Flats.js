import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'


class Flats extends React.Component {
  render() {
    return (
      <div className='home'>
        <div className='bloc_page'>
          <Header />
          <main>
            <h2>
              nom de l'appart : <br/>{this.props.title}
            </h2>
          </main>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Flats