// external imports
import React from 'react'
// local imports
import Props from './Props'
import styles from './styles'
import PropValue from '../PropValue'

const LessThan = () => <span>&lt;</span>
const GreaterThan = () => <span>&gt;</span>

export const WithChildren = ({name, children: node, ...unused}) => {
    const children = Array.isArray(node.props.children) ? node.props.children : [node.props.children]
    return (
        <div {...unused}>
            <div>
                <LessThan/>
                {name}
                <Props>{node}</Props>
                <GreaterThan/>
            </div>
            {children.map((child, i) => (
                <div style={styles.children} key={i}>
                    <Node>{child}</Node>
                </div>
            ))}
            <div>
                <LessThan/>
                /
                {name}
                <GreaterThan/>
            </div>
        </div>
    )
}

export const NoChildren = ({name, children: node, ...unused}) => (
    <div {...unused}>
        <LessThan/>
        {name}
        /
        <GreaterThan/>
    </div>
)

// if the element is a
const Node = ({children: node, style, ...unused}) => {
    // if we couldn't find the element name
    if (!node.type) {
        // then its just PropValue
        return typeof node === 'string' ? <span>{node}</span> : <PropValue>{node}</PropValue>
    }
    // the name of the node
    const name = node.type.name || node.type.displayName || node.type

    const componentStyle = {
        ...styles.code,
        ...style,
    }

    // if we couldn't find the element name
    if (!name) {
        // then its just PropValue
        return (
            <PropValue
                style={componentStyle}
                {...unused}
            >
                {node}
            </PropValue>
        )
    }

    // if there are no children
    if (!node.props.children) {
        // then return a single line node
        return (
            <NoChildren
                style={componentStyle}
                name={name}
                {...unused}
            >
                {node}
            </NoChildren>
        )
    }

    // there are children in this node
    return (
        <WithChildren
            style={componentStyle}
            name={name}
            {...unused}
        >
            {node}
        </WithChildren>
    )
}

export default Node
