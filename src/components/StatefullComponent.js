import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({ text }) => ({ text })

// Use named export for unconnected component (for tests)
export const StatefullComponent = ({ text }) => <div>{text}</div>

// Use default export for the connected component (for app)
export default connect(mapStateToProps)(StatefullComponent)
