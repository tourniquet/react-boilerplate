/* globals describe, test, expect */

import React from 'react'
import { shallow } from 'enzyme'
import { createStore } from 'redux'

import ConnectedApp from './StatefullComponent'

import reducer from '../../config/reducer'
const store = createStore(
  reducer
)

describe('StatefullComponent', () => {
  test('render StatefullComponent', () => {
    const wrapper = shallow(
      <ConnectedApp store={store} />
    ).dive()

    expect(wrapper.find('div')).toHaveLength(1)
    expect(wrapper.contains('Statefull component')).toBe(true)
  })
})
