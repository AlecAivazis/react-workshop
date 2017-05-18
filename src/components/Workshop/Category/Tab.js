// external imports
import React from 'react'
// local imports
import styles from './styles'

const CategoryTab = ({bp, style, selected, ...unused}) => {
    // show a highlighted style if we are selected
    const elementStyle = selected ? styles.selectedBlueprint : styles.blueprint
    // render the component
    return (
        <div style={{...elementStyle, ...style}} {...unused}>
            {bp.props.title}
        </div>
    )
}

export default CategoryTab
