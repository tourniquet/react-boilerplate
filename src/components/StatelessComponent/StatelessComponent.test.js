/* globals describe, test, expect */

import React from 'react'
import { shallow } from 'enzyme'
import StatelessComponent from './StatelessComponent'

describe('StatelessComponent', () => {
  test('render StatelessComponent', () => {
    const wrapper = shallow(
      <StatelessComponent />
    )

    expect(wrapper.find('div')).toHaveLength(1)
    expect(wrapper.contains('Stateless component')).toBe(true)
  })
})
