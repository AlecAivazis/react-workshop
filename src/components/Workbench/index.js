// external imports
import React from 'react'
// local imports
import Category from '../Category'
import styles from './styles'
import findCategories from './find-categories'
import findBlueprint from './find-blueprint'

class Workbench extends React.Component {
    state = {
        category: '',
        blueprint: '',
    }

    render() {
        const { style, children, ...unused } = this.props

        // the categories for the workbench
        const categories = findCategories(children)
        // find the example to show
        const blueprint = findBlueprint(children, this.state)

        return (
            <div style={{ ...styles.container, ...style }} {...unused}>
                <div style={styles.tabContainer}>
                    {categories.map(category => (
                        <Category
                            {...category}
                            setFocus={this._setFocus}
                            selectedState={this.state}
                        />
                    ))}
                </div>
                <div style={styles.workbench}>
                    {blueprint}
                </div>
            </div>
        )
    }

    constructor(...args) {
        super(...args)
        this._setFocus = focus => this.setState(focus)
    }
}

export default Workbench
