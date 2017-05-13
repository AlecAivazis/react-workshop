// external imports
import React from 'react'
import PropTypes from 'prop-types'
// local imports
import { Example, Blueprint, Workbench, Category } from './components'

export default function ExampleWorkbench() {
    return (
        <Workbench>
            <Category title="Workbench">
                <Blueprint title="Example" component={Example}>
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
