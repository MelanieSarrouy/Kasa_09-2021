import React from 'react'
import starFull from '../assets/star-full.svg'
import starEmpty from '../assets/star-empty.svg'


class Rating extends React.Component {
  render() {
    const range = [1, 2, 3, 4, 5]
    return (
      <div className='rating'> 
      {
        range.map((el, index) => (
          this.props.rating >= el ?
          <img key={index} src={starFull} alt='étoile remplie' className='rating__item' />
          :
          <img key={index} src={starEmpty} alt='étoile remplie' className='rating__item' />
        ))
      }
    </div>
)
  }
}

export default Rating