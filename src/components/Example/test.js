// external imports
import React from 'react'
import { mount } from 'enzyme'
// local imports
import Example from '.'

// a Component to mount inside the example
const Child = () => <span/>

describe('Example', function() {
  test('passes element child through', () => {
    // mount a Example with a known
    const wrapper = mount(
      <Example>
        <Child/>
      </Example>
    )

    // make sure there is only one child
    expect(wrapper.find(Child)).toHaveLength(1)
  })

  test('calls the child function if applicable', () => {
    // mount a example with a known
    const wrapper = mount(
      <Example>
        {() => <Child />}
      </Example>
    )

    // make sure there is only one child
    expect(wrapper.find(Child)).toHaveLength(1)
  })
})
