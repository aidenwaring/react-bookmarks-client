import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Bookmarks from './Bookmarks'
import NoMatch from './NoMatch'
import Navbar from './NavBar'

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/bookmarks" component={Bookmarks} />
        <Route component={NoMatch} />
      </Switch>
    </>
  )
}

export default App