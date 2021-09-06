import React from 'react';
import flats from '../datas/data';

const Cards = () => {

  return (
    <div>
      <ul className='cards'>
        {flats
        .map((flat) => (
          <li className='cards__flat' key={flat.id}>
            <img className='cards__flat__img' src={flat.cover} alt={flat.title} />
            <div className='cards__flat__background'></div>
            <h2 className='cards__flat__title'>{flat.title}</h2> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cards;