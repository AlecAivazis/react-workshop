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
        // add the prop description to the list
        props.push({
            propName,
            propType: PropTypesMap.get(component.propTypes[propName]),
        })
    }

    return (
        <table style={{...styles.container, ...style}} {...unused}>
            <thead>
                <tr>
                    <th>property</th>
                    <th>type</th>
                </tr>
            </thead>
            <tbody>
                {props.map((prop, i) => (
                    <tr key={i}>
                        <td>{prop.propName}</td>
                        <td>{prop.propType}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}


// build a map from proptype to name
export const PropTypesMap = new Map()
for (const typeName in PropTypes) {
  if (!PropTypes.hasOwnProperty(typeName)) {
    continue
  }
  const type = PropTypes[typeName]
  PropTypesMap.set(type, typeName)
//   PropTypesMap.set(type.isRequired, typeName)
}



export default PropTable
