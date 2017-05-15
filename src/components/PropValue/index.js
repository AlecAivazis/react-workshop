// external imports
import React from 'react'
import PropTypes from 'prop-types'

const PropValue = ({children, showBraces}) => (
    <span>
        {showBraces && '{'}
        {JSON.stringify(children)}
        {showBraces && '}'}
    </span>
)

PropValue.propTypes = {
    children: PropTypes.any,
    showBraces: PropTypes.bool,
}
PropValue.defaultProps = {
    showBraces: true,
}

export default PropValue
