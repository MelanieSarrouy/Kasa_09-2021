import React from 'react'

class Infos extends React.Component {
  render() {
    return (
      <div>
          <header className='infos'>
            <div className='flat'>
              <div className='flat__container'>
                <h2 className='flat__container__title'>{this.props.title}</h2>
                <p className='flat__container__location'>{this.props.location}</p>
                <ul className='tags'>
                  {this.props.tags.map((tag, index) => (
                    <li key={index} className='tags__item'>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='host'>
                <div className='host__container'>
                  <p className='host__container__name'>{this.props.host.name}</p>
                  <div className='host__container__img' >
                    <img src={this.props.host.picture} alt={this.props.id} />
                  </div>
                </div>
                <div className='rating' >
                  <p>{this.props.rating}</p>
                </div>
              </div>
            </div>
          </header>
      </div>
    )
  }
}

export default Infos