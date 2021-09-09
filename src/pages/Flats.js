import React from 'react'
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
    const { title } = this.state.flat
    return (
      <div>
        <main>
          <h2>{title}</h2>
        </main>
      </div>
    )
  }
}

export default Flats