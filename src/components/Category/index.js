// external imports
import React from 'react'
import PropTypes from 'prop-types'
// local imports
import styles from './styles'
import Blueprint from '../Blueprint'

const Category = ({ title, blueprints, setFocus, selectedState }) => {
    // wether or not the category is selected
    const categorySelected = selectedState.category === title
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>
                {title}
            </h1>
            <div style={styles.content}>
                {React.Children.map(blueprints, ({props}) => {
                    // figure out if the blueprint is selected
                    const selected =  categorySelected
                                        && selectedState.blueprint === props.title

                    return (
                        <div
                            style={selected ? styles.selectedBlueprint : styles.blueprint}
                            onClick={() => setFocus({
                                category: title,
                                blueprint: props.title,
                            })}
                        >
                            {props.title}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

Category.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired,
}

export default Category
