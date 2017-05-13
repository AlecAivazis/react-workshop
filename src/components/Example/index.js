// external imports
import React from 'react'
import PropTypes from 'prop-types'
// local imports
import styles from './styles'
import Source from './Source'

const Example = ({ title, children }) => {
    // if the child is a function, pass it the environment
    const child = typeof children === 'function' ? children() : children
    return (
        <div style={styles.container}>
            <div style={styles.title}>
                {title}
            </div>
            <div style={styles.content}>
                <div>
                    {child}
                </div>
                <Source style={styles.example}>
                    hello
                </Source>
            </div>
        </div>
    )
}

Example.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
}

export default Example
