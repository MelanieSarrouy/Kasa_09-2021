import React from 'react'


class Flats extends React.Component {
  render() {
    return (
      <div>
        <main>
          <h2>
            nom de l'appart : <br/>{this.props.title}
          </h2>
        </main>
      </div>
    )
  }
}

export default Flats