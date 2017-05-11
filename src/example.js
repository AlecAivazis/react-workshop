// external imports
import React from 'react'
// local imports
import { Example, Blueprint, Workbench, Category } from './components'

export default function ExampleWorkbench() {
    return (
        <Workbench>
            <Category title="form">
                <Blueprint title="Buttons">
                    <Example title="with content">
                        <div>
                            hello
                        </div>
                    </Example>
                    <Example title="without content">
                        <div>
                            hello
                        </div>
                    </Example>
                </Blueprint>
            </Category>
        </Workbench>
    )
}
