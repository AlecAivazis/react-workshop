// external imports
import React from 'react'
import PropTypes from 'prop-types'
// local imports
import styles from './styles'

const Blueprint = ({ title, children, ...unused }) => (
    <div {...unused} style={styles.container}>
        <h2 style={styles.title}>
            {title}
        </h2>
        <div style={styles.examples}>
            {React.Children.map(children, ({ props: example }) => (
                <div>
                    {example.title}
                </div>
            ))}
        </div>
    </div>
)

Blueprint.propTypes = {
    title: React.PropTypes.string,
    children: React.PropTypes.node
}

export default Blueprint
