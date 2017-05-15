// external imports
import React from 'react'
import PropTypes from 'prop-types'
// local imports
import styles from './styles'
import PropTable from '../PropTable'

const Blueprint = ({ style, title, children, category, setFocus, component: Component, ...unused }) => (
    <div {...unused} style={{...styles.container, ...style}}>
        <h1 style={styles.title}>
            {title}
        </h1>
        <h2 style={styles.subheader}>
            Prop Types
        </h2>
        <PropTable>
            {Component}
        </PropTable>
        <h2 style={styles.subheader}>
            Examples
        </h2>
        {children}
    </div>
)

Blueprint.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}

export default Blueprint
