import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// components
import StatelessComponent from './components/StatelessComponent'
import StatefullComponent from './components/StatefullComponent'

import reducer from './reducers/reducer'
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = () =>
  <Provider store={store}>
    <div>
      <StatelessComponent />
      <StatefullComponent />
    </div>
  </Provider>

render(
  <App />,
  document.querySelector('#container')
)
