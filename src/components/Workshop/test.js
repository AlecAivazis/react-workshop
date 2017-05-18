// external imports
import React from 'react'
import PropTypes from 'prop-types'
import { mount } from 'enzyme'
// local imports
import { Workshop, Category, Blueprint, Provider } from '..'
import store, { setFocus } from '../../store'
import LocalCategory from './Category'

describe('Workshop', function() {
    test('shows a category tab for each category in the Workshop', () => {
        // a component to test with
        const component = mount(
            <Provider>
                <Workshop>
                    <Category title="hello">
                        <Blueprint title="hello" />
                    </Category>
                    <Category title="hello2">
                        <Blueprint title="hello" />
                    </Category>
                </Workshop>
            </Provider>
        )

        // make sure there is the right number of category tabs
        expect(component.find(LocalCategory)).toHaveLength(2)
    })

    test('shows the correct blueprint given the current selection', () => {

        // a component to look for
        const Child = () => <span>hello</span>

        // a workshop to test with
        const component = mount(
            <Provider>
                <Workshop>
                    <Category title="hello">
                        <Blueprint title="hello">
                            <Child/>
                        </Blueprint>
                    </Category>
                    <Category title="hello2">
                        <Blueprint title="hello" />
                    </Category>
                </Workshop>
            </Provider>
        )

        // select the blueprint with the child component
        store.dispatch(setFocus({
            category: "hello",
            blueprint: "hello",
        }))

        // there should be a child
        expect(component.find(Child)).toHaveLength(1)
    })
})
