// external imports
import React from 'react'
// local imports
import Props from './Props'
import styles from './styles'

const LessThan = () => <span>&lt;</span>
const GreaterThan = () => <span>&gt;</span>
const Code = ({style, ...unused}) => <div style={{...styles.code, ...style}} />

export const WithChildren = ({name, children: node, ...unused}) => (
    <div {...unused}>
        <div>
            <LessThan/>
            {name}
            <Props>{node}</Props>
            <GreaterThan/>
        </div>
        {React.Children.map(node.props.children, child => (
            <div style={styles.children}>
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

export const NoChildren = ({name, children: node, ...unused}) => (
    <div {...unused}>
        <LessThan/>
        {name}
        \
        <GreaterThan/>
    </div>
)

export const Text = ({children: node, ...unused}) => (
    <div {...unused}>
        {node}
    </div>
)

// if the element is a
const Node = ({children: node, style, ...unused}) => {
    // if we couldn't find the element name
    if (!node.type) {
        // then its just text
        return <Text>{node}</Text>
    }
    // the name of the node
    const name = node.type.name || node.type.displayName || node.type

    const componentStyle = {
        ...styles.code,
        ...style,
    }

    // if we couldn't find the element name
    if (!name) {
        // then its just text
        return (
            <Text
                style={componentStyle}
                {...unused}
            >
                {node}
            </Text>
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
