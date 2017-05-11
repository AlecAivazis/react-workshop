// external imports
import React from 'react'
// local imports
import { Category } from 'components'
import styles from './styles'
import findCategories from './find-categories'

const Workbench = ({ style, children, ...unused }) => {
    // the categories for the workbench
    const categories = findCategories(children)

    return (
        <div style={{ ...styles.container, ...style }} {...unused}>
            <div style={styles.tabContainer}>
                {categories.map(category => <Category {...category} />)}
            </div>
            <div style={styles.workbench}>
                environment
            </div>
        </div>
    )
}

export default Workbench
