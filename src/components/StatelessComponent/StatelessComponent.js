import { Helmet } from 'react-helmet'
import React, { Fragment } from 'react'

import './StatelessComponent.less'

const StatelessComponent = () =>
  <Fragment>
    <Helmet>
      <title>StatelessComponent - React Boilerplate</title>
    </Helmet>

    <span className='stateless-component'>
      Stateless component
    </span>
  </Fragment>

export default StatelessComponent
