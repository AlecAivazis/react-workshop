// external imports
import React from 'react'
import PropTypes from 'prop-types'
// local imports
import styles from './styles'
import PropTable from '../../PropTable'

const Blueprint = ({ style, title, children, component, ...unused }) => (
    <div {...unused} style={{...styles.container, ...style}}>

        <h1 style={styles.title}>
            {title}
        </h1>
        {component && (
            <div style={styles.flexContainer}>
                <h2 style={styles.subheader}>
                    Prop Types
                </h2>
                <PropTable>
                    {component}
                </PropTable>
            </div>
        )}
        <h2 style={styles.subheader}>
            Examples
        </h2>
        {children}
    </div>
)

Blueprint.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}

export default Blueprint
