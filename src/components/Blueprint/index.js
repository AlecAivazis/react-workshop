// external imports
import React from 'react'
import PropTypes from 'prop-types'
// local imports
import styles from './styles'

const Blueprint = ({ title, children, category, setFocus, ...unused }) => (
    <div {...unused} style={styles.container}
        onClick={() =>
                        setFocus({
                            category,
                            blueprint: title,
                        })}>
            {title}
    </div>
)

Blueprint.propTypes = {
    title: React.PropTypes.string,
    children: React.PropTypes.node,
}

export default Blueprint
