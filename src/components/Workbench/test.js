// external imports
import React from 'react'
import { mount } from 'enzyme'
// local imports
import { Workbench, Category, Example } from '..'

describe('Workbench', function() {
    test('shows a category tab for each category in the workbench', () => {
        // a component to test with
        const component = mount(
            <Workbench>
                <Category title="hello">
                    <Example title="example" />
                </Category>
                <Category title="hello2">
                    <Example title="example" />
                </Category>
            </Workbench>
        )

        // make sure there is the right number of category tabs
        expect(component.find(Category)).toHaveLength(2)
    })
})
