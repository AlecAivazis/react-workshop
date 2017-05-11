// external imports
import React from 'react'
// local imports
import { Example, Blueprint, Workbench } from './components'

export default function ButtonBlueprint() {
    return (
        <Workbench>
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
        </Workbench>
    )
}
