import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { createStore } from 'redux'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import React, { Fragment } from 'react'

// components
import IndexComponent from './components/IndexComponent/IndexComponent'
import StatelessComponent from './components/StatelessComponent/StatelessComponent'
import StatefullComponent from './components/StatefullComponent/StatefullComponent'

import reducer from './reducers/reducer'
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = () =>
  <Provider store={store}>
    <Fragment>
      <Helmet>
        <title>React boilerplate</title>
      </Helmet>
    </Fragment>

    <Switch>
      <Route path='/' exact component={IndexComponent} />
      <Route path='/statefull' component={StatefullComponent} />
      <Route path='/stateless' component={StatelessComponent} />
      <Route path='/redirect'>
        <Redirect to='/redirect' />
      </Route>
    </Switch>
  </Provider>

render(
  <Router>
    <App />
  </Router>,
  document.querySelector('#container')
)
