import React from 'react'
import { shallow } from 'enzyme'
import { createStore } from 'redux'

import ConnectedApp from './index'

import reducer from '../../reducers/reducer'
const store = createStore(reducer)

const wrapper = shallow(<ConnectedApp store={store} />).dive()

describe('StatefullComponent', () => {
  it('should render StatefullComponent', () => {
    expect(wrapper.find('div')).toHaveLength(1)
  })

  it('should render "Statefull component"', () => {
    expect(wrapper.contains('Statefull component')).toBe(true)
  })

  it('should not render "Hello, world!" text', () => {
    expect(wrapper.contains('Hello, world!')).toBe(false)
  })
})
