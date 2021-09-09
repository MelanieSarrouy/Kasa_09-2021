import React from 'react'

class Card extends React.Component {
  render() {
    return (
      <article className='gallery__flat' id={this.props.id}>
        <picture className='gallery__flat__img'>
          <source srcSet='' media='' />
          <img src={this.props.cover} alt={this.props.title} />
        </picture>
        <h3 className='gallery__flat__title'>{this.props.title}</h3> 
      </article>
    )
  }
}

export default Card