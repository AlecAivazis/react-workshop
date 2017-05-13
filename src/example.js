// external imports
import React from 'react'
import PropTypes from 'prop-types'
// local imports
import { Example, Blueprint, Workbench, Category } from './components'

const Component = () => (
    <div>
        hello
    </div>
)

Component.propTypes = {
    hello: PropTypes.string,
}

export default function ExampleWorkbench() {
    return (
        <Workbench>
            <Category title="Workbench">
                <Blueprint title="Example" component={Component}>
                    <Example title="regular component as child">
                        <Example title="Example">
                            <div>
                                hello1
                            </div>
                        </Example>
                    </Example>
                    <Example title="functional child">
                        <Example title="Example">
                        {() => (
                            <div>
                                hello1
                            </div>
                        )}
                        </Example>
                    </Example>
                </Blueprint>
            </Category>
        </Workbench>
    )
}
