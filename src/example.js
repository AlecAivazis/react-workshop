// external imports
import React from 'react'
import PropTypes from 'prop-types'
// local imports
import { Example, Blueprint, Workbench, Category } from './components'

const Button = ({...unused}) => (
    <div style={{width: 100, backgroundColor: 'green', height: 50}} {...unused} />
)
Button.propTypes = {
    children: PropTypes.string,
}

export default function ExampleWorkbench() {
    return (
        <Workbench>
            <Category title="Form">
                <Blueprint title="Input" component={Button}>
                    <Example title="default">
                        <Button>
                            hello
                        </Button>
                    </Example>
                    <Example title="disabled">
                        <Button>
                            hello
                        </Button>
                    </Example>
                </Blueprint>
            </Category>
        </Workbench>
    )
}
