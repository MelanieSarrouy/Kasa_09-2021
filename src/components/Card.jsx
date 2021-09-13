import React from 'react'

class Card extends React.Component {
  render() {
    return (
      <article className='card' id={this.props.id}>
        <div className='card__container'>
          <img src={this.props.cover} alt={this.props.title}  className='card__container__img' />
        </div>
        <h3 className='card__title'>{this.props.title}</h3> 
      </article>
    )
  }
}

export default Card