// external imports
import React from 'react'
import PropTypes from 'prop-types'

class Blueprint extends React.Component {
    static contextTypes = {
        registerBlueprint: PropTypes.func.isRequired,
        categoryTitle: PropTypes.string.isRequired,
    }

    componentDidMount() {
        this.context.registerBlueprint({
            title: this.context.categoryTitle,
            blueprint: this,
        })
    }

    render() {
        return null
    }
}
export default Blueprint
