import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import About from './pages/About.jsx'
import Flats from './pages/Flats.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='home'>
          <div className='bloc_page'>
            <Header />
            <Switch>
              <Route exact={true} 
                     path='/' 
                     component={Home} />
              <Route exact={true} 
                     path='/a-propos' 
                     component={About} />
              <Route exact={true} 
                     path='/fiche-logement/:id' 
                     component={Flats} />
              <Route component={NotFound} />
            </Switch>
          </div>
        <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App