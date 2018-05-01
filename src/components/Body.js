import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {}
}

const Body = props => {
  return (
    <div>
      Hello, world!
    </div>
  )
}

export default connect(mapStateToProps)(Body)
