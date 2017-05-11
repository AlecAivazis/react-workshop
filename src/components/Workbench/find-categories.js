// external imports
import React from 'react'

// findCategories is responsible for providing a list of categories
// within an entire workbench
export default function findCategories(children) {
    // make sure we always have a list of children
    return (
        React.Children
            .toArray(children)
            // filter out the non blueprints and categories
            .map(child => {
                return {
                    title: child.props.title,
                    blueprints: child.props.children
                }
            })
    )
}
