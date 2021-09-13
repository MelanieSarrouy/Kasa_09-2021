import React from 'react'


class Dropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isToggleOn: false}

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }
  render() {
    const content = this.props.content
    return (
      <div className='dropdown' onClick={this.handleClick}>
        <div className='dropdown__title'>
          <p className='dropdown__title__name'>{this.props.title}</p>
          <i className={`fas ${this.state.isToggleOn ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
        </div>
      {
        this.state.isToggleOn ?
          <div className='dropdown__content'>
          {
            Array.isArray(content) ? 
            
            <ul className='dropdown__content__text'>
              {this.props.content
              .map((element, index) => (
                <li key={index}>{element}</li>
              ))}
            </ul>
            :
            <p className='dropdown__content__text'>
              {content}
            </p>
          }
          </div>
          :
          ''
      }
      </div>
    )
  }
}

export default Dropdown