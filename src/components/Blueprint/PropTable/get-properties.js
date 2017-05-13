// external imports
import PropTypes from 'prop-types'

// build a map from proptype to name
export const PropTypeNameMap = new Map()
// there needs to be an empty for each possible prop type
for (const typeName in PropTypes) {
  // make sure we dont get
  if (!PropTypes[typeName]) {
    continue
  }

  // the type object
  const type = PropTypes[typeName]
  // refer to types by their name
  PropTypeNameMap.set(type, typeName)
  // refer to required types by the name of the base type
  PropTypeNameMap.set(type.isRequired, typeName)
}

export default component => {
    // the list of propTypes in this component
    const props = {}

    // for each prop on the component
    for (const propName of Object.keys(component.propTypes)) {
        // the actual prop
        const prop = component.propTypes[propName]
        // add the prop description to the list
        props[propName] = {
            propName,
            propType: PropTypeNameMap.get(prop) || 'other',
            required: prop.isRequired === undefined ? 'yes' : 'no',
        }
    }

    // if there are default props declared for the component
    if (component.defaultProps) {
        // for each default value
        for (const propName of Object.keys(component.defaultProps)) {
            // the actual prop value
            const value = component.defaultProps[propName];

            // if this is the first time we've encountered this property (no type assigned)
            if (!props[propName]) {
                // save a new entry
                props[propName] = {
                    // save the name of the property
                    propName,
                 }
            }
            props[propName].defaultValue = value;
        }
    }

    // the properties  of the component
    return Object.values(props)
}
