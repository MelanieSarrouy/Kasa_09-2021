import React from 'react';
import Background from '../assets/IMG.jpg'


class Banner extends React.Component {
  render() {
    const title = 'Chez vous, partout et ailleurs'
    return (
      <div className='banner'>
        <img src={Background} alt='arrière-plan paysage' className='banner__img'/>
        <div className='banner__bkg'></div>
        <h1 className='banner__title'>{title}</h1>
      </div>
    )
  }
}

export default Banner;