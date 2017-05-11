// external imports
import React from 'react'
import PropTypes from 'prop-types'
// local imports
import styles from './styles'

const Example = ({ description, children }) => {
    // if the child is a function, pass it the environment
    const child = typeof children === 'function' ? children() : children
    return (
        <div style={styles.container}>
            <div style={styles.description}>
                {description}
            </div>
            <div style={styles.content}>
                {child}
            </div>
        </div>
    )
}

Example.propTypes = {
    children: PropTypes.node,
    description: PropTypes.string,
}

export default Example
