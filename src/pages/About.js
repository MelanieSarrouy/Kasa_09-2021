import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Section1 from '../components/Section1'
import Background from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg'


class About extends React.Component {
  render() {
    return (
      <div className='about'>
        <div className='bloc_page'>
          <Header />
          <Section1 
            picture={Background}
          />
          <h1>À propos</h1>
          <br />
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec nisl quis nisl maximus venenatis. Donec erat risus, facilisis sollicitudin turpis a, tempor vehicula dui. Suspendisse dictum tortor libero, posuere imperdiet magna pellentesque non. Morbi eleifend ipsum quis magna dapibus, quis auctor arcu sodales. Donec sollicitudin eros eu quam lobortis, ac efficitur urna rutrum. Nunc ac felis ac ex finibus sagittis a at massa. Nullam dictum tincidunt velit sit amet rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec quis nisl sed quam ornare varius. Donec congue dui vitae vestibulum feugiat. Mauris luctus est purus, viverra iaculis justo scelerisque vel. Nulla consectetur felis ut turpis varius, id gravida purus sodales. Duis semper est eget mi tincidunt, at condimentum ex sagittis.
              Aliquam et elit diam. Donec sollicitudin massa vitae lacus vulputate sagittis. Duis ornare consequat augue et maximus. Etiam feugiat tempus enim ut consequat. Nam in nunc orci. Mauris mattis faucibus nunc, sed finibus lectus bibendum et. Donec elit lorem, auctor non libero sit amet, vehicula accumsan quam. Curabitur vitae nisi a nisi ultricies ultrices et vitae sem. Phasellus at fermentum leo. Donec egestas sapien id venenatis eleifend. Donec quis sodales massa. 
          </p>
        </div>
        <Footer />
      </div>
    )
  }
}

export default About