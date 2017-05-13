// external imports
import React from 'react'
import PropTypes from 'prop-types'
// local imports
import EmptyState from './Empty'
import styles from './styles'

const PropTable = ({children: component, style, ...unused}) => {
    // if there are no prop types defined on the component
    if (!component.propTypes) {
        // return the empty state
        return (
            <EmptyState style={style} {...unused}/>
        )
    }
    // the list of propTypes in this component
    const props = []

    // for each prop on the component
    for (const propName of Object.keys(component.propTypes)) {
        // the actual prop
        const prop = component.propTypes[propName]
        // add the prop description to the list
        props.push({
            propName,
            propType: PropTypeNameMap.get(prop) || 'other',
            required: prop.isRequired === undefined ? 'yes' : 'no',
        })
    }

    return (
        <table style={{...styles.container, ...style}} {...unused}>
            <thead>
                <tr>
                    <th>property</th>
                    <th>type</th>
                    <th>required</th>
                </tr>
            </thead>
            <tbody>
                {props.map((prop, i) => (
                    <tr key={i}>
                        <td>{prop.propName}</td>
                        <td>{prop.propType}</td>
                        <td>{prop.required}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}


// build a map from proptype to name
export const PropTypeNameMap = new Map()
// there needs to be an empty for each possible prop type
for (const typeName in PropTypes) {
  // make sure we dont get
  if (!PropTypes[typeName]) {
    continue
  }

  // the type object
  const type = PropTypes[typeName]
  // refer to types by their name
  PropTypeNameMap.set(type, typeName)
  // refer to required types by the name of the base type
  PropTypeNameMap.set(type.isRequired, typeName)
}



export default PropTable
