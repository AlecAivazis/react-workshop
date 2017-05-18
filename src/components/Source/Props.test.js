// external imports
import React from 'react'
import PropTypes from 'prop-types'
import { shallow } from 'enzyme'
// local imports
import Props from './Props'
import { PropValue } from 'components'

describe('Source', () => {
    describe('Props', () => {
        test('renders prop values', () => {
            const wrapper = shallow(
                <Props>
                    <div hover={true}/>
                </Props>
            )

            // make sure there is something resembling the prop string
            expect(wrapper.text()).toContain('hover=<PropValue />')

            // with the right value
            expect(wrapper.find(PropValue).props().children).toBeTruthy()
        })

        test('doesn\'t show an entry for children', () => {
            const wrapper = shallow(
                <Props>
                    <div>
                        <div/>
                    </div>
                </Props>
            )

            // there shouldn't be anything
            expect(wrapper.text()).toBeFalsy()
        })
    })
})

