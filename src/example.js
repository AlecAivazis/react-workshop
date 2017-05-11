// external imports
import React from 'react'
// local imports
import { Example, Blueprint, Workbench, Category } from './components'

export default function ButtonBlueprint() {
    return (
        <Workbench>
            <Category title="form">
                <Blueprint title="Buttons">
                    <Example description="with content">
                        <div>
                            hello
                        </div>
                    </Example>
                    <Example description="without content">
                        <div>
                            hello
                        </div>
                    </Example>
                </Blueprint>
            </Category>
        </Workbench>
    )
}
