/* globals describe, test, expect */

import React from 'react'
import { shallow } from 'enzyme'
import { createStore } from 'redux'

import ConnectedApp from '../src/components/StatefullComponent'

import reducer from '../src/config/reducer'
const store = createStore(
  reducer
)

describe('StatefullComponent', () => {
  test('render StatefullComponent', () => {
    const wrapper = shallow(
      <ConnectedApp store={store} />
    ).dive()

    expect(wrapper.find('div')).toHaveLength(1)
    expect(wrapper.contains('Hello, world!')).toBe(true)
  })
})
