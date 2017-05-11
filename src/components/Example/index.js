// external imports
import React from 'react'
// local imports
import styles from './styles'

const Example = ({ description, children }) => {
    // if the child is a function, pass it the environment
    const child = typeof children === 'function' ? children() : children
    return (
        <div style={styles.container}>
            <div style={styles.description}>
                {description}
            </div>
            <div style={styles.content}>
                {child}
            </div>
        </div>
    )
}

Example.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.element,
        React.PropTypes.func,
    ]),
    description: React.PropTypes.string,
}

export default Example
