// external imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// local imports
import styles from './styles'
import CategoryTab from './Tab'
import { setFocus } from '../../../store'

const Category = ({ title, blueprints, focus, focusBp }) => {
    // wether or not the category is selected
    const categorySelected = focus.category === title

    // render the component
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>
                {title}
            </h1>
            <div style={styles.content}>
                {(blueprints || []).map(({props}, i) => {
                    // figure out if the blueprint is selected
                    const selected =  categorySelected && focus.blueprint === props.title

                    // render the category tab
                    return (
                        <CategoryTab
                            key={i}
                            bp={{props}}
                            selected={selected}
                            onClick={() => focusBp({
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

const selector = ({ focus }) => ({ focus })
const mapDispatchToProps = dispatch => ({
    focusBp: focus => dispatch(setFocus(focus)),
})

export default connect(selector, mapDispatchToProps)(Category)
