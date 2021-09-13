import React from 'react'

class Tag extends React.Component {
  render() {
    return (
      <li key={this.props.index} className='tags__item'>{this.props.tag}</li>
    )
  }
}

export default Tag