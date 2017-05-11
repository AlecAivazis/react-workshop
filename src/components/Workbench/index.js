// external imports
import React from 'react'
// local imports
import Category from '../Category'
import styles from './styles'
import findCategories from './find-categories'
import findExample from './find-example'

class Workbench extends React.Component {
    state = {
        activeExample: {
            category: "form",
            blueprint: "Buttons",
            example: "with content",
        }
    }

    render() {
        const { style, children, ...unused } = this.props

        // the categories for the workbench
        const categories = findCategories(children)
        // find the example to show
        const example = findExample(children, this.state.activeExample)

        return (
            <div style={{ ...styles.container, ...style }} {...unused}>
                <div style={styles.tabContainer}>
                    {categories.map(category => <Category {...category} />)}
                </div>
                <div style={styles.workbench}>
                    {example}
                </div>
            </div>
        )
    }
}

export default Workbench
