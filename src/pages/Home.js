import React from 'react'
import Gallery from '../components/Gallery'
import Section1 from '../components/Section1'
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