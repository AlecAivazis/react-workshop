// external imports
import React from 'react'
import PropTypes from 'prop-types'
// local imports
import styles from './styles'

const Example = ({ title, children }) => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>
                {title}
            </h1>
            <div style={styles.content}>
                hello
            </div>
        </div>
    )
}

Example.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired
}

export default Example
