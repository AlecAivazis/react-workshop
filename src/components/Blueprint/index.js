// external imports
import React from 'react'
import PropTypes from 'prop-types'
// local imports
import styles from './styles'

const Workbench = ({ title, children, ...unused }) => (
    <div {...unused} style={styles.container}>
        <h2 style={styles.title}>
            {title}
        </h2>
        <div style={styles.examples}>
            {children}
        </div>
    </div>
)

Workbench.propTypes = {
    title: React.PropTypes.string,
    children: React.PropTypes.node
}

export default Workbench
