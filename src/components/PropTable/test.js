// external imports
import React from 'react'
import PropTypes from 'prop-types'
import { mount } from 'enzyme'
// local imports
import PropTable from '.'
import { PropTypeNameMap } from './get-properties'
import EmptyState from './Empty'

describe('PropTable', function() {
    let wrapper

    beforeEach(() => {
        wrapper = mount(<PropTable>{Child}</PropTable>)
    })

    test('handles components with no props', () => {
        expect(mount(<PropTable>{NoProp}</PropTable>).find(EmptyState)).toHaveLength(1)
    })

    test('shows a table with a row for each prop', () => {
        // make sure there is a row for each proptype on Child
        expect(wrapper.find('tbody > tr')).toHaveLength(Object.keys(Child.propTypes).length)
    })

    test('shows a table row for each primitive', () => {
        // treat each primitive the same
        for (const type of primitives) {
            // make sure there is a row with the right propType value
            expect(
                wrapper.find('tbody > tr').filterWhere(
                    row => row.childAt(1).text() === PropTypeNameMap.get(type)
                )
            ).toHaveLength(1)
        }
    })

    test('indicates the prop as required when marked', () => {
        // find the required rows
        expect(wrapper.find('tbody > tr').filterWhere(
            // we can assume the required column is third
            ele => ele.childAt(2).text() === 'yes'
        // there should be one required row
        ).map(ele => ele.childAt(0).text())).toHaveLength(1)

        // find the non-required rows
        expect(wrapper.find('tbody > tr').filterWhere(
            // we can assume the required column is third
            ele => ele.childAt(2).text() === 'no'
        // and the rest should be not-required
        ).map(ele => ele.childAt(0).text())).toHaveLength(Object.values(Child.propTypes).length - 1)
    })

    test('shows default values for props', () => {
        // find the row with a required field
        expect(wrapper.find('tbody > tr').filterWhere(
            // we can assume the default column is fourth
            ele => {
                return ele.childAt(3).text() === '"hello"'
            }
        // there should be one required row
        )).toHaveLength(1)
    })
})

// a list of primitive types
const primitives = [
    PropTypes.bool,
    PropTypes.func,
    PropTypes.number,
    PropTypes.object,
    PropTypes.string,
    PropTypes.symbol,
]

// a component without propTypes
const NoProp = () => <div />

// a Component to mount inside the example
const Child = () => <span />
// we should be able to render any type of prop
Child.propTypes = {
    array: PropTypes.array,
    bool: PropTypes.bool,
    func: PropTypes.func,
    number: PropTypes.number,
    object: PropTypes.object,
    string: PropTypes.string,
    symbol: PropTypes.symbol,
    node: PropTypes.node,
    element: PropTypes.element,
    instanceOf: PropTypes.instanceOf(Child),
    enum: PropTypes.oneOf(['News', 'Photos']),
    oneOfType: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    objectOf: PropTypes.objectOf(PropTypes.number),
    shape: PropTypes.shape({
        color: PropTypes.string,
        fontSize: PropTypes.number
    }),
    arrayOf: PropTypes.arrayOf(PropTypes.number),
    required: PropTypes.arrayOf(PropTypes.number).isRequired,
    any: PropTypes.any,
}

Child.defaultProps = {
    string: 'hello',
}
