import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import React, { Fragment } from 'react'

const mapStateToProps = ({ text }) => ({ text })

// Use named export for unconnected component (for tests)
export const StatefullComponent = ({ text }) => 
  <Fragment>
    <Helmet>
      <title>StatefullComponent - React Boilerplate</title>
    </Helmet>

    {text}
  </Fragment>

// Use default export for the connected component (for app)
export default connect(mapStateToProps)(StatefullComponent)
