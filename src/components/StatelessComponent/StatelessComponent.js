import { Helmet } from 'react-helmet'
import React from 'react'

import './StatelessComponent.less'

const StatelessComponent = () =>
  <div className='container'>
    <Helmet>
      <title>StatelessComponent - React Boilerplate</title>
    </Helmet>

    <h2 className='stateless-component'>
      Stateless component
    </h2>

    <p>
      Edit component <span className='code'>src/components/StatelessComponent/StatelessComponent.js</span> for this page.
    </p>
  </div>

export default StatelessComponent
