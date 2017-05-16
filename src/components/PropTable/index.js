// external imports
import React from 'react'
import PropTypes from 'prop-types'
// local imports
import EmptyState from './Empty'
import PropValue from '../PropValue'
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

    // the description of the component props
    const props = getProperties(component)

    // we have prop types for the component so render the summary table
    return (
        <table style={{...styles.table, ...style}} {...unused}>
            <thead>
                <tr style={styles.row}>
                    <th style={styles.header}>property</th>
                    <th style={styles.header}>type</th>
                    <th style={styles.header}>required</th>
                    <th style={styles.header}>default</th>
                </tr>
            </thead>
            <tbody>
                {props.map((prop, i) => (
                    <tr style={styles.row} key={i}>
                        <td style={styles.element}>{prop.propName}</td>
                        <td style={styles.element}>{prop.propType || 'other'}</td>
                        <td style={styles.element}>{prop.required || 'no'}</td>
                        <td style={styles.element}><PropValue showBraces={false}>{prop.defaultValue || '-'}</PropValue></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}


export default PropTable
