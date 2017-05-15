// external imports
import React from 'react'
import PropTypes from 'prop-types'
import { mount } from 'enzyme'
// local imports
import Source, {Text, WithChildren, NoChildren} from '.'

describe('Source', function() {
    test('can render source for text', () => {
        // wrap a simple text element
        const wrapper = mount(
            <Source>
                hello
            </Source>
        )

        // this should render a text node
        const text = wrapper.find(Text)

        // make sure it exists
        expect(text).toHaveLength(1)

        // make sure the child of the text node is the string hello
        expect(text.props().children).toEqual('hello')
    })

    test('can render an element with no children', () => {
        const element = <div style={{hello: 'hello'}}/>
        // wrap a simple text element
        const wrapper = mount(
            <Source>
                {element}
            </Source>
        )

        // this should render a text node
        const node = wrapper.find(NoChildren)

        // make sure it exists
        expect(node).toHaveLength(1)
        // make sure the child of the node node is component we passed originally
        expect(node.props().children).toEqual(element)
    })

    test('can render an element with children', () => {
        // an element with children
        const element = (
            <div>
                <div>hello</div>
                <div>world</div>
                <span onClick={true}/>
            </div>
        )

        // mount the source wrapper
        const wrapper = mount(
            <Source>
                {element}
            </Source>
        )

        // there are 3 nodes with children (each div has a child)
        expect(wrapper.find(WithChildren)).toHaveLength(3)
        // two text nodes
        expect(wrapper.find(Text)).toHaveLength(2)
        // and one node without children
        expect(wrapper.find(NoChildren)).toHaveLength(1)
    })
})
