import React from 'react'
import Section1 from '../components/Section1.jsx'
import Background from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg'
import Dropdown from '../components/Dropdown.jsx'
import { about } from '../datas/data'


class About extends React.Component {
  render() {
    return (
      <div className='about' >
        <Section1 picture={Background} />
        <h1 className='sr-only'>À propos</h1>
        <main className='about__dropdowns'>
          <Dropdown title={about.reliability.title} content={about.reliability.content} />
          <Dropdown title={about.respect.title} content={about.respect.content} />
          <Dropdown title={about.service.title} content={about.service.content} />
          <Dropdown title={about.security.title} content={about.security.content} />
        </main>
      </div>
    )
  }
}

export default About