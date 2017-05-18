// external imports
import React from 'react'
import PropTypes from 'prop-types'
// local imports
import styles from './styles'
import CategoryTab from './Tab'
import Blueprint from '../Blueprint'
console.log('hello')
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
                        <CategoryTab
                            bp={{props}}
                            selected={selected}
                            onClick={() => setFocus({
                                category: title,
                                blueprint: props.title,
                            })}
                        >
                            <div
                                style={selected ? styles.selectedBlueprint : styles.blueprint}
                            >
                                {props.title}
                            </div>
                        </CategoryTab>
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
