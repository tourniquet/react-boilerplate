import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import React, { Fragment } from 'react'

import './StatefullComponent.scss'

const mapStateToProps = ({ text }) => ({ text })

// Use named export for unconnected component (for tests)
export const StatefullComponent = ({ text }) => 
  <Fragment>
    <Helmet>
      <title>StatefullComponent - React Boilerplate</title>
    </Helmet>

    <span className='statefull-component'>{text}</span>
  </Fragment>

// Use default export for the connected component (for app)
export default connect(mapStateToProps)(StatefullComponent)
