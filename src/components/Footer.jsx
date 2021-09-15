import React from 'react'
import logo from '../assets/logoFooter.svg'

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <img src={logo} alt="logo" className="footer__img" />
        <p className="footer__rights">© 2020 Kasa. All rights reserved</p>
      </div>
    )
  }
}

export default Footer
