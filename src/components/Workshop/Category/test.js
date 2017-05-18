// external imports
import React from 'react'
import { mount } from 'enzyme'
// local imports
import { Workshop, Category, Blueprint } from '../..'
import CategoryTab from './Tab'

describe('Workshop', function() {
    test('shows a category tab for each category in the Workshop', () => {
        // a component to test with
        const component = mount(
            <Workshop>
                <Category title="hello">
                    <Blueprint title="hello" />
                    <Blueprint title="hello" />
                </Category>
            </Workshop>
        )

        // make sure there is the right number of category tabs
        expect(component.find(CategoryTab)).toHaveLength(2)
    })
})
