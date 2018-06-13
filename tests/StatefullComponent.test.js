/* globals describe, test, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { createStore } from 'redux'

import ConnectedApp from '../src/components/StatefullComponent'

import reducer from '../src/config/reducer'
const store = createStore(
  reducer
)

describe('StatefullComponent', () => {
  test('render StatefullComponent', () => {
    const component = renderer.create(
      <ConnectedApp store={store} />
    )

    const tree = component.toJSON()
    const firstChild = tree.children[0]

    expect(firstChild).toBe('Hello, world!')
    expect(firstChild).not.toBe('undefined')
  })
})
