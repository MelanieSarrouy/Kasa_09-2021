import React from 'react'
import Gallery from '../components/Gallery.jsx'
import Section1 from '../components/Section1.jsx'
import Background from '../assets/IMG.jpg'
const title = 'Chez vous, partout et ailleurs'



class Home extends React.Component {
  render() {
    return (
      <div>
          <Section1 
            picture={Background}
            title={title}
          />
          <Gallery />
      </div>
    )
  }
}

export default Home