/* globals describe, test, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import StatelessComponent from '../src/components/StatelessComponent'

describe('StatelessComponent', () => {
  test('render StatelessComponent', () => {
    const component = renderer.create(
      <StatelessComponent />
    )

    const tree = component.toJSON()
    const firstChild = tree.children[0]

    expect(firstChild).toBe('Hello, world!')
    expect(firstChild).not.toBe('undefined')
  })
})
