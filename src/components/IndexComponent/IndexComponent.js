import { Link } from 'react-router-dom'
import React, { Fragment } from 'react'

const IndexComponent = () =>
  <Fragment>
    <Link
      to={{ pathname: '/stateless' }}
    >
      <h2>Stateless component</h2>
    </Link>

    <Link
      to={{ pathname: '/statefull' }}
    >
      <h2>Sstatefull component</h2>
    </Link>

    <Link
      to={{ pathname: '/redirect' }}
    >
      <h2>Redirect</h2>
    </Link>

      <h1>Index component</h1>
  </Fragment>

export default IndexComponent
