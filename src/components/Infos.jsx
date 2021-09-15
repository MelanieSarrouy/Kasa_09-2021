import React from 'react'
import Rating from './Rating.jsx'
import Tag from './Tag.jsx'

class Infos extends React.Component {
  render() {
    return (
      <header className="infos">
        <div className="flat">
          <div className="flat__container">
            <h1 className="flat__container__title">{this.props.title}</h1>
            <p className="flat__container__location">{this.props.location}</p>
            <ul className="tags">
              {this.props.tags.map((tag, index) => (
                <Tag tag={tag} index={index} key={index} />
              ))}
            </ul>
          </div>
          <div className="host">
            <div className="host__container">
              <div className="host__container__name">
                {this.props.host.name.split(' ').map((element, index) => (
                  <p key={index}>{element}</p>
                ))}
              </div>
              <div className="host__container__img">
                <img src={this.props.host.picture} alt={this.props.id} />
              </div>
            </div>
            <Rating rating={this.props.rating} />
          </div>
        </div>
      </header>
    )
  }
}

export default Infos
