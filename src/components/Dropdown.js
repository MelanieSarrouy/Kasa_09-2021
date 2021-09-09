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
    console.log(this.setState.isToggleOn)
  }
  render() {
    return (
      <div className='dropdown' onClick={this.handleClick}>
        <div className='dropdown__title'>
          <p className='dropdown__title__name'>{this.props.title}</p>
          <i className={`fas ${this.state.isToggleOn ? "fa-chevron-down" : "fa-chevron-up"}`}></i>
        </div>
      {
        this.state.isToggleOn ?
          <div className='dropdown__content'>
            <p className='dropdown__content__text'>
              {this.props.content}
            </p>
          </div>
          :
          ''
      }
      </div>
    )
  }
}

export default Dropdown