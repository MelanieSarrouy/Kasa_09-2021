import React from 'react'
import right from '../assets/chevron-droite.svg'
import left from '../assets/chevron-gauche.svg'


class Carrousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0
    }
  }

  handleClickPrevSlide = () => {
    const current = this.state.current
    current === 0 ? 
      this.setState({current: this.props.pictures.length - 1}) 
      : 
      this.setState({current: current -1})
  }

  handleClickNextSlide = () => {
    const current = this.state.current
    current === this.props.pictures.length - 1 ?
      this.setState({current: 0})
      :
      this.setState({current: current + 1})
  }

  render() {
    const pictures = this.props.pictures
    const title = this.props.title
    const current = this.state.current

    return (
      <section className='carrousel'>
        {pictures.length > 1 && 
          (<div>
            <div className='carrousel__left' onClick={this.handleClickPrevSlide} >
              <img src={left} alt='chevron gauche' className='carrousel__left__icon' />
            </div>
            <div className='carrousel__right' onClick={this.handleClickNextSlide}>
              <img src={right} alt='chevron droite' className='carrousel__left__icon'  />
            </div>
          </div>)
        }
      <img src={pictures[current]} 
            alt={`${title} visuel ${current +1}`} 
            className='carrousel__img' 
      />
      <div className='carrousel__counter'>
        <p>{current+1} / {pictures.length}</p>
      </div>
    </section>
)
  }
}

export default Carrousel