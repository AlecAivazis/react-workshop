// external imports
import React from 'react'
import PropTypes from 'prop-types'
// local imports
import styles from './styles'
import PropTable from './PropTable'

const Blueprint = ({ style, title, children, category, setFocus, component: Component, ...unused }) => (
    <div {...unused} style={{...styles.container, ...style}}>
        <h1 style={styles.title}>
            {title}
        </h1>
        <PropTable>
            {Component}
        </PropTable>
        {children}
    </div>
)

Blueprint.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}

export default Blueprint
