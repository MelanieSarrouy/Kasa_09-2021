import React from 'react'
import flats from '../datas/data'

class Gallery extends React.Component {
  render() {
    return (
      <main>
        <ul className='gallery'>
          {flats
          .map((flat) => (
            <li key={flat.id}>
              <article className='gallery__flat'>
                <picture className='gallery__flat__img'>
                  <source srcSet='' media='' />
                  <img src={flat.cover} alt={flat.title} />
                </picture>
                <h2 className='gallery__flat__title'>{flat.title}</h2> 
              </article>
            </li>
          ))}
        </ul>
      </main>
    )
  }
}

export default Gallery