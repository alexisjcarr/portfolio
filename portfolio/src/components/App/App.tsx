import React from 'react'
import { Route, Switch } from 'react-router-dom'

import MainPage from '../MainPage'
import Designs from '../Designs'
import ChatApp from '../Designs/ChatApp'
import FourOhFour from '../Designs/DesignNotFound'

import './App.scss'

const App: React.FC = () => (
  <div className='App'>
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route exact path='/designs' component={Designs} />
      <Route exact path='/designs/chat-app' component={ChatApp} />
      <Route component={FourOhFour} />
    </Switch>
  </div>
)

export default App
