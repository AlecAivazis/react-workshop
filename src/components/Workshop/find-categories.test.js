// external imports
import React from 'react'
import { mount } from 'enzyme'
// local imports
import { Workbench, Category, Example } from '..'
import findCategories from './find-categories'

describe('Workshop', function() {
    describe('findCategories', () => {
        test('can find the categories in a workbench of one', () => {
            // a component to test with
            const component = mount(
                <Workbench>
                    <Category title="hello">
                        <Example title="example" />
                    </Category>
                </Workbench>
            )

            // try to find the categories in the workbench
            const categories = findCategories(component.props().children)

            // make sure we found one category
            expect(categories).toHaveLength(1)
            // make sure we have the righ title
            expect(categories[0].title).toEqual('hello')
        })
    })
})
