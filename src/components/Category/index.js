// external imports
import React from 'react'
import PropTypes from 'prop-types'
// local imports
import styles from './styles'
import Blueprint from '../Blueprint'

const Category = ({ title, blueprints }) => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>
                {title}
            </h1>
            <div style={styles.content}>
                {React.Children.map(blueprints, bp => (
                    <Blueprint {...bp.props} />
                ))}
            </div>
        </div>
    )
}

Category.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired
}

export default Category
