// external imports
import React from 'react'
import PropTypes from 'prop-types'

class Category extends React.Component {
    static childContextTypes = {
        categoryTitle: PropTypes.string,
    }

    static propTypes = {
        title: PropTypes.string.isRequired
    }

    getChildContext() {
        return {categoryTitle: this.props.title,}
    }

    render() {
        return <div>{this.props.children}</div>
    }
}
export default Category
