import React from 'react'
import { shallow } from 'enzyme'

import StatelessComponent from './index.js'

const wrapper = shallow(<StatelessComponent />)

describe('StatelessComponent', () => {
  it('render StatelessComponent', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('should render "Stateless component"', () => {
    expect(wrapper.contains('Stateless component')).toBe(true)
  })

  it('should not render "Hello, world!"', () => {
    expect(wrapper.contains('Hello, world!')).toBe(false)
  })
})
