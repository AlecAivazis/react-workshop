// external imports
import React from 'react'
// local imports
import styles from './styles'

const Example = ({title, children}) => {
  // if the child is a function, pass it the environment
  const child = typeof children === "function"
                                ? children()
                                : children
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        {title}
      </h1>
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
  title: React.PropTypes.string,
}

export default Example
