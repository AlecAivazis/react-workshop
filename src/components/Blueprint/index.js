// external imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// local imports
import { addBlueprint } from '../../store'

class Blueprint extends React.Component {
    static contextTypes = {
        categoryTitle: PropTypes.string.isRequired,
    }

    componentDidMount() {
        this.props.register({
            title: this.context.categoryTitle,
            blueprint: this,
        })
    }

    render() {
        return null
    }
}

const mapDispatchToProps = dispatch => ({
    register: bp => dispatch(addBlueprint(bp))
})

export default connect(null, mapDispatchToProps)(Blueprint)
