import React from 'react'
import Dropdown from '../components/Dropdown.jsx';
import Infos from '../components/Infos.jsx';
import {flats} from '../datas/data'
import Carrousel from '../components/Carrousel.jsx';
import NotFound from '../pages/NotFound.jsx';


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
    if (this.state.flat === undefined) {
      return <NotFound />
    } else {

      const { id, title, pictures, location, tags, host, rating, description, equipments } = this.state.flat
    
      return (
        <main>
          <Carrousel
            pictures={pictures}
            title={title}
          />
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
            <Dropdown title='Équipements' content={equipments} />
          </section>
        </main>
      )
    }
  }
}

export default Flats