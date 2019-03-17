import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import React from 'react'

import './StatefullComponent.scss'

const mapStateToProps = ({ text }) => ({ text })

// Use named export for unconnected component (for tests)
export const StatefullComponent = ({ text }) =>
  <div className='container'>
    <Helmet>
      <title>StatefullComponent - React Boilerplate</title>
    </Helmet>

    <h2 className='statefull-component'>Statefull component</h2>

    <p>Edit component <span className='code'>{text}</span> for this page.</p>
  </div>

// Use default export for the connected component (for app)
export default connect(mapStateToProps)(StatefullComponent)
