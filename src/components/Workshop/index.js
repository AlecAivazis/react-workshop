// external imports
import React from 'react'
import { connect } from 'react-redux'
// local imports
import Category from './Category'
import Blueprint from './Blueprint'
import styles from './styles'

const Workshop = ({ style, children, categories, blueprint, ...unused }) => {
    // remove truly unused props
    Reflect.deleteProperty(unused, 'dispatch')

    // if we have a blueprint to show
    const bp = blueprint && {...blueprint.props}
    if (bp) {
        // remove props we injected ourselves
        Reflect.deleteProperty(bp, 'register')
    }


    return (
        <div style={{ ...styles.container, ...style }} {...unused}>
            <div style={styles.tabContainer}>
                {Object.keys(categories).map((category, i) => {
                    // the blueprint associated with this category
                    const blueprints = categories[category].filter(bp => bp).map(({blueprint}) => blueprint)

                    return <Category title={category} blueprints={blueprints} key={i} />
                })}
            </div>
            <div style={styles.workshop}>
                {bp && <Blueprint {...bp} />}
            </div>
            {children}
        </div>
    )
}


// the data we need from the store
const mapStateToProps = ({blueprints, focus}) => ({
    // we need to group the list of blueprints by their category
    categories: blueprints.reduce((prev, curr) => ({
        ...prev,
        [curr.title]: [
            ...(prev[curr.title] || []),
            curr,
        ]
    }), {}),
    // the selected blueprint
    blueprint: (blueprints.find(
        ({title: categoryTitle, blueprint: {props: {title}}}) => categoryTitle === focus.category && title === focus.blueprint
    ) || {}).blueprint
})

export default connect(mapStateToProps)(Workshop)
