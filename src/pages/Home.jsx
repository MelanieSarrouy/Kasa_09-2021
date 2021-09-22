import React from 'react'
import Gallery from '../components/Gallery.jsx'
import Section from '../components/Section.jsx'
import Background from '../assets/IMG.jpg'
const title = 'Chez vous, partout et ailleurs'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Section picture={Background} title={title} />
        <Gallery />
      </div>
    )
  }
}

export default Home
