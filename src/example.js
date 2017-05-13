// external imports
import React from 'react'
// local imports
import { Example, Blueprint, Workbench, Category } from './components'

export default function ExampleWorkbench() {
    return (
        <Workbench>
            <Category title="form">
                <Blueprint title="Input">
                    <Example title="with content">
                        <div>
                            input
                        </div>
                    </Example>
                </Blueprint>
                <Blueprint title="Select">
                    <Example title="with content">
                        <div>
                            hello1
                        </div>
                    </Example>
                </Blueprint>
                <Blueprint title="Checkbox">
                    <Example title="with content">
                        <div>
                            hello1
                        </div>
                    </Example>
                </Blueprint>
            </Category>
            <Category title="buttons">
                <Blueprint title="primary">
                    <Example title="with content">
                        <div>
                            hello1
                        </div>
                    </Example>
                </Blueprint>
                <Blueprint title="secondary">
                    <Example title="with content">
                        <div>
                            hello1
                        </div>
                    </Example>
                </Blueprint>
            </Category>
            <Category title="icons">
                <Blueprint title="Low-Fi">
                    <Example title="with content">
                        <div>
                            hello1
                        </div>
                    </Example>
                </Blueprint>
                <Blueprint title="Hi-Fi">
                    <Example title="with content">
                        <div>
                            hello1
                        </div>
                    </Example>
                </Blueprint>
            </Category>

        </Workbench>
    )
}
