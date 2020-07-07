import React from 'react'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/bookmarks" component={Bookmarks} />
      <Route component={NoMatch} />
    </Switch>
  )
}

export default App
