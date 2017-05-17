// external imports
import React from 'react'
// local imports
import PropValue from '../PropValue'
import styles from './styles'

const Props = ({children: node}) => {
    // figure out if the node only has children for props
    const onlyChildren = Object.keys(node.props).length === 1 && Object.keys(node.props)[0] === 'children'
    // if there are no props to render
    if (!node || !node.props || onlyChildren) {
        // don't render anything
        return null
    }

    // pull out the necessary metadata from the node
    const { props, type } = node
    const { defaultProps } = type

    // ignore internal props and default values
    const propNames = Object.keys(props).filter(
        prop =>
            prop[0] !== '_' &&
            prop !== 'children' &&
            (!defaultProps || props[prop] != defaultProps[prop])
    )

    return (
        <span>
            {' '}
            {propNames.map(name => (
                <span style={styles.prop} key={name}>
                    <span style={styles.propName}>
                        {name}
                    </span>
                    <span>
                        =
                        <PropValue>{props[name]}</PropValue>
                    </span>
                </span>
            ))}
        </span>
    )
}

export default Props
