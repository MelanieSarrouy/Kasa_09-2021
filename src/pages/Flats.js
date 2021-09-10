import React from 'react'
import Dropdown from '../components/Dropdown';
import Infos from '../components/Infos';
import {flats} from '../datas/data'



class Flats extends React.Component {
  constructor(props) {
    super(props)
    const id = this.props.match.params.id;
    const flat = flats.find(element => element.id === id)
    this.state = {
      flat: flat
    }

  }
  render() {
    const { id, title, pictures, location, tags, host, rating, description, equipments } = this.state.flat
    return (
      <div>
        <main className='flats'>
          <section className='carrousel'>
            <picture className='carrousel__img'>
              <source srcSet='' media='' />
              <img src={pictures[2]} alt={title}/>
            </picture>
              {/* {pictures.map((picture, index) => (
                <picture key={index} className='carrousel__img'>
                  <source srcSet='' media='' />
                  <img src={picture} alt={index}/>
                </picture>
              ))} */}
          </section>
          <Infos 
            id={id}
            title={title}
            location={location}
            tags={tags}
            host={host}
            rating={rating}
          />

          <section className='flats__dropdowns'>
            <Dropdown title='Description' content={description} />
            <Dropdown title='Equipements' content={equipments} />
          </section>
        </main>
      </div>
    )
  }
}

export default Flats