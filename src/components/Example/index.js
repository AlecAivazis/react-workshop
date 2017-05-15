// external imports
import React from 'react'
import PropTypes from 'prop-types'
// local imports
import styles from './styles'
import Source from '../Source'

const Example = ({ title, children, exampleComponent, style, ...unused }) => {
    // if the child is a function, pass it the environment
    const child = typeof children === 'function' ? children() : children

    return (
        <div style={{...styles.container, ...style}}>
            <div style={styles.title}>
                {title}
            </div>
            <div style={styles.content}>
                <div style={styles.example}>
                    {child}
                </div>
                <Source style={styles.source}>
                    {child}
                </Source>
            </div>
        </div>
    )
}

Example.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    title: PropTypes.string,
}

export default Example
