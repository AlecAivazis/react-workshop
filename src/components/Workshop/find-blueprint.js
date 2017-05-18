// external imports
import React from 'react'

// findBlueptin is responsiblie for retrieving the blueprint component
// that matches the current selection
export default function findBlueprint(
    children,
    { category, blueprint }
) {
    // the list of blueprints to look through
    let blueprints = React.Children
        .toArray(children)
        .filter(child => child.type.name === 'Blueprint')

    // if we have a specific category to look for
    if (category) {
        const cMatch = React.Children
            .toArray(children)
            .find(
                child =>
                    child.type.name === 'Category' &&
                    child.props.title === category
            )

        if (cMatch) {
            blueprints = React.Children.toArray(cMatch.props.children)
        }
    }

    // look for the matching blueprint
    return blueprints.find(
        bp => bp.type.name === 'Blueprint' && bp.props.title === blueprint
    )

}
