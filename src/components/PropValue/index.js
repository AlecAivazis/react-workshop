// external imports
import React from 'react'
import PropTypes from 'prop-types'

const contentForValue = val => {
    // what is shown depends on the values type
    let content

    // number
    if (typeof val === 'number') {
        content = val.toString()

    // string
    } else if (typeof val === 'string') {
        content = `"${val}"`

    // boolean
    } else if (typeof val === 'boolean') {
        content = val ? 'true' : 'false'

    // array
    } else if (Array.isArray(val)) {
        // the maximum number of elements to show in a list
        const max = 3

        content = (
            <span>
                [
                    {val.slice(0, max).map((ele, i) => (
                        <span key={i}>
                            {contentForValue(ele)}
                            {i !== val.length - 1 && ', '}
                        </span>
                    ))}
                    {val.length > max && '...'}
                ]
            </span>
        )

    // function
    } else if (typeof val === 'function') {
        content = <span>{val.name ? `${val.name}()` : 'anonymous()'}</span>

    // component
    } else if (React.isValidElement(val)) {
        content = (
            <span>
                {`<${val.type.displayName || val.type.name || val.type} />`}
            </span>
        )

    // unknown
    } else if (typeof val !== 'object') {
        content = <span>…</span>

    // object
    } else {
        content = (
            <span>
                {'{'}
                    {Object.keys(val).map(key => (
                        <span key={key}>
                            {key}: {contentForValue(val[key])}
                        </span>
                    ))}
                {'}'}
            </span>
        )
    }


    return <span>{content}</span>
}

const PropValue = ({children, showBraces}) => (
    <span>
        {showBraces && '{'}
        {contentForValue(children)}
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
