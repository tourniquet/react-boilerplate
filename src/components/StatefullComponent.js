import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    text: state.text
  }
}

// Use named export for unconnected component (for tests)
export const StatefullComponent = props => {
  const { text } = props

  return (
    <div>{text}</div>
  )
}

// Use default export for the connected component (for app)
export default connect(mapStateToProps)(StatefullComponent)
