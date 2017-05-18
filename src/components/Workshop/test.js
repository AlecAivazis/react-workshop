// external imports
import React from 'react'
import PropTypes from 'prop-types'
import { mount } from 'enzyme'
// local imports
import { Workshop, Category, Blueprint } from '..'

describe('Workshop', function() {
    test('shows a category tab for each category in the Workshop', () => {
        // a component to test with
        const component = mount(
            <Workshop>
                <Category title="hello">
                    <Blueprint title="hello" />
                </Category>
                <Category title="hello2">
                    <Blueprint title="hello" />
                </Category>
            </Workshop>
        )

        // make sure there is the right number of category tabs
        expect(component.find(Category)).toHaveLength(2)
    })

    test('provides context value to register category', () => {
        class Child extends React.Component {
            componentWillMount() {
                // call the category registration
                this.context.registerBlueprint('hello')
            }

            render() {
                return null
            }
        }

        Child.contextTypes = {
            registerBlueprint: PropTypes.func.isRequired
        }


        // a component to test with
        const component = mount(
            <Workshop>
                <Child/>
            </Workshop>
        )

        expect(component.state().blueprints).toEqual(['hello'])
    })
})
