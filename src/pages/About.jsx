import React from 'react'
import Section1 from '../components/Section1.jsx'
import Background from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg'
import Dropdown from '../components/Dropdown.jsx'
import { about } from '../datas/data'

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <Section1 picture={Background} className="about__banner" />
        <h1 className="sr-only">À propos</h1>
        <main className="about__dropdowns">
          {about.map((el, index) => (
            <Dropdown key={index} title={el.title} content={el.content} />
          ))}
        </main>
      </div>
    )
  }
}

export default About
