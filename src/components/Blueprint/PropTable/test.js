// external imports
import React from 'react'
import PropTypes from 'prop-types'
import { mount } from 'enzyme'
// local imports
import PropTable, { PropTypesMap } from '.'
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
            expect(wrapper.find('tbody').findWhere(ele => {
                // we're looking for a table row
                if (ele.type() !== 'tr') {
                    // this isn't the droid we're looking for
                    return false
                }

                //  make sure we can find a td with the right type name
                return ele.find('td').findWhere(ele => ele.text() === PropTypesMap.get(type)).length > 1
            // we should have found something
            })).toHaveLength(1)
        }
    })
})

// a list of primitive types
const primitives = [
    PropTypes.array,
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
  arrayOf: PropTypes.arrayOf(PropTypes.number),
  objectOf: PropTypes.objectOf(PropTypes.number),
  shape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),
  required: PropTypes.string.isRequired,
  any: PropTypes.any,
  customProp: (props, propName, componentName) => {},
}
