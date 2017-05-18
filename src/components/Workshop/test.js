// external imports
import React from 'react'
import PropTypes from 'prop-types'
import { mount } from 'enzyme'
// local imports
import { Workshop, Category, Blueprint, Provider } from '..'
import store, { setFocus } from '../../store'
import LocalCategory from './Category'
import LocalBlueprint from './Blueprint'

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
                    <Category title="hello1">
                        <Blueprint title="helloA">
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
            category: "hello1",
            blueprint: "helloA",
        }))

        // there should be a child
        const selected = component.find(LocalBlueprint)
        // make sure it's what we expect
        expect(selected).toHaveLength(1)
        expect(selected.props().title).toEqual("helloA")
    })
})
