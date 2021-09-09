import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Flats from './pages/Flats'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='home'>
          <div className='bloc_page'>
            <Header />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/a-propos' exact component={About} />
              <Route path='/fiche-logement/:id' exact component={Flats} />
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