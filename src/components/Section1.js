import React from 'react'


class Section1 extends React.Component {
  render() {
    return (
      <section className='section1'>
        <picture  className='section1__img'>
          <source srcSet='' media='' />
          <img src={this.props.picture} alt='arrière-plan paysage'/>
        </picture>
        {this.props.title && <h1 className='section1__title'>{this.props.title}</h1>}
      </section>
    )
  }
}

export default Section1