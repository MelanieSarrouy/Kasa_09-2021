import React from 'react'

class Dropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isToggleOn: false }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }))
  }
  render() {
    const content = this.props.content
    const isToggleOn = this.state.isToggleOn
    return (
      <div className="dropdown" onClick={this.handleClick}>
        <div className="dropdown__title">
          <h2 className="dropdown__title__name">{this.props.title}</h2>
          <i
            className={`fas ${
              isToggleOn ? 'fa-chevron-up' : 'fa-chevron-down'
            }`}
          ></i>
        </div>
        {isToggleOn ? (
          <div className="dropdown__content">
            {Array.isArray(content) ? (
              <ul className="dropdown__content__text">
                {content.map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            ) : (
              <p className="dropdown__content__text">{content}</p>
            )}
          </div>
        ) : (
          ''
        )}
      </div>
    )
  }
}

export default Dropdown
