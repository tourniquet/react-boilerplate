import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// components
import StatelessComponent from './components/StatelessComponent'

import reducer from './config/reducer'
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <StatelessComponent />
      </div>
    </Provider>
  )
}

render(
  <App />,
  document.querySelector('#container')
)
