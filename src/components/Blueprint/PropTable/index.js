// external imports
import React from 'react'
import PropTypes from 'prop-types'
// local imports
import EmptyState from './Empty'
import styles from './styles'
import getProperties from './get-properties'

const PropTable = ({children: component, style, ...unused}) => {
    // if there are no prop types defined on the component
    if (!component.propTypes) {
        // return the empty state
        return (
            <EmptyState style={style} {...unused}/>
        )
    }

    // we have prop types for the component so render the summary table
    return (
        <table style={{...styles.container, ...style}} {...unused}>
            <thead>
                <tr>
                    <th>property</th>
                    <th>type</th>
                    <th>required</th>
                    <th>default</th>
                </tr>
            </thead>
            <tbody>
                {getProperties(component).map((prop, i) => (
                    <tr key={i}>
                        <td>{prop.propName}</td>
                        <td>{prop.propType}</td>
                        <td>{prop.required}</td>
                        <td>{prop.defaultValue || '-'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}


export default PropTable
