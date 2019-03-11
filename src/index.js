import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Helmet } from 'react-helmet'

// components
import StatelessComponent from './components/StatelessComponent/StatelessComponent'
import StatefullComponent from './components/StatefullComponent/StatefullComponent'

import reducer from './reducers/reducer'
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = () =>
  <Provider store={store}>
    <div>
      <Helmet>
        <title>React boilerplate</title>
      </Helmet>

      <StatelessComponent />
      <StatefullComponent />
    </div>
  </Provider>

render(
  <App />,
  document.querySelector('#container')
)
