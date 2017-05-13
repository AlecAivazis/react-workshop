// external imports
import React from 'react'
import PropTypes from 'prop-types'
// local imports
import styles from './styles'
import Blueprint from '../Blueprint'

const Category = ({ title, blueprints, setFocus }) => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>
                {title}
            </h1>
            <div style={styles.content}>
                {React.Children.map(blueprints, ({props}) => (
                    <div
                        style={styles.blueprint}
                        onClick={() => setFocus({
                            title,
                            blueprint: props.title,
                        })}
                    >
                        {props.title}
                    </div>
                ))}
            </div>
        </div>
    )
}

Category.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired,
}

export default Category
