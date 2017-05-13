// external imports
import React from 'react'
import { mount } from 'enzyme'
// local imports
import { Workbench, Category, Blueprint } from '..'
import CategoryTab from './Tab'

describe('Workbench', function() {
    test('shows a category tab for each category in the workbench', () => {
        // a component to test with
        const component = mount(
            <Workbench>
                <Category title="hello">
                    <Blueprint title="hello" />
                    <Blueprint title="hello" />
                </Category>
            </Workbench>
        )

        // make sure there is the right number of category tabs
        expect(component.find(CategoryTab)).toHaveLength(2)
    })
})
