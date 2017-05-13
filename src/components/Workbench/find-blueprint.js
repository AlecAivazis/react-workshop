// external imports
import React from 'react'

// findExample is responsiblie for retrieving the example component
// that matches the current selection
export default function findBlueprint(
    children,
    { category, blueprint }
) {
    // the list of blueprints to look through
    let blueprints = React.Children
        .toArray(children)
        .find(child => child.type.name === 'Blueprint')
    // the list of examples to look through
    let examples = React.Children
        .toArray(children)
        .find(child => child.type.name === 'Example')
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
    // if we have blueprints to look through
    if (blueprints && blueprints.length > 0) {
        // look for the matching blueprint
        return blueprints.find(
            bp => bp.type.name === 'Blueprint' && bp.props.title === blueprint
        )
    }

}
