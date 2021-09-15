import React from 'react'
import { Link } from 'react-router-dom'
import { flats } from '../datas/data'
import Card from './Card.jsx'

class Gallery extends React.Component {
  render() {
    return (
      <main>
        <h2 className="sr-only">Gallerie d'appartements</h2>
        <ul className="gallery">
          {flats.map((flat) => (
            <li key={flat.id}>
              <Link exact to={`fiche-logement/${flat.id}`}>
                <Card id={flat.id} cover={flat.cover} title={flat.title} />
              </Link>
            </li>
          ))}
        </ul>
      </main>
    )
  }
}

export default Gallery
