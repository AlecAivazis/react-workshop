// external imports
import React from 'react'
import PropTypes from 'prop-types'
import { shallow, mount } from 'enzyme'
// local imports
import PropValue from '.'

describe('Source', () => {
    describe('PropValue', () => {
        test('renders numbers correctly', () => {
            const wrapper = shallow(
                <PropValue>{1}</PropValue>
            )

            expect(wrapper.text()).toContain("{1}")
        })

        test('renders strings correctly', () => {
            const wrapper = shallow(
                <PropValue>{'hello'}</PropValue>
            )

            expect(wrapper.text()).toContain("\"hello\"")
        })

        test('renders booleans correctly', () => {
            const wrapper = shallow(
                <PropValue>{true}</PropValue>
            )

            expect(wrapper.text()).toContain("{true}")
        })

        test('renders anonymous functions correctly', () => {
            const wrapper = shallow(
                <PropValue>{() => {}}</PropValue>
            )

            expect(wrapper.text()).toContain("{anonymous()}")
        })

        test('renders arrays correctly', () => {
            const wrapper = shallow(
                <PropValue>{[1,"asdf"]}</PropValue>
            )

            expect(wrapper.text()).toContain("{[1, \"asdf\"]}")
        })

        test('only renders the first 3 elements of an array', () => {
            const wrapper = shallow(
                <PropValue>{[1,"asdf",3, 4]}</PropValue>
            )

            expect(wrapper.text()).toContain("{[1, \"asdf\", 3, ...]}")
        })

        test('renders named functions correctly', () => {
            function foo() {}
            const wrapper = shallow(
                <PropValue>{foo}</PropValue>
            )

            expect(wrapper.text()).toContain("{foo()}")
        })

        test('renders components correctly', () => {
            // a dummy component to test with
            const Foo = ()=> <div/>

            const Component = <Foo />
            const wrapper = mount(
                <PropValue>{Component}</PropValue>
            )

            // make sure we wrapped a node in braces
            expect(mount(<PropValue>{Component}</PropValue>).text()).toEqual('{<Foo />}')

            // make sure we rendered a node
            expect(wrapper.find(PropValue)).toHaveLength(1)
            expect(wrapper.find(PropValue).props().children).toEqual(Component)
        })

        test('renders objects as jsonified strings', () => {
            // the objec to use as a child
            const child = {
                foo: "bar"
            }

            const wrapper = shallow(
                <PropValue>{child}</PropValue>
            )

            expect(wrapper.text()).toContain('{foo: "bar"}')
        })

        test('can toggle braces', () => {
            // try rendering the value without braces
            const wrapper = mount(
                <PropValue showBraces={false}>{1}</PropValue>
            )

            expect(wrapper.text()).toEqual("1")
        })
    })
})

