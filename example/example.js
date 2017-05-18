// external imports
import React from 'react'
import PropTypes from 'prop-types'
// local imports
import { Example, Blueprint, Workshop, Category } from '../src'

const Button = ({...unused}) => (
    <div style={{width: 100, backgroundColor: 'green', height: 50}} {...unused} />
)
Button.propTypes = {
    children: PropTypes.string,
}
Button.defaultProps = {
    children: "hello"
}

const Icon = () => <span>icon</span>
Icon.propTypes = {
    name: PropTypes.string,
}

export default function ExampleWorkshop() {
    return (
        <Workshop>
            <Category title="Form">
                <Blueprint title="Button" component={Button}>
                    <Example title="default">
                        <Button>
                            hello
                        </Button>
                    </Example>
                    <Example title="default">
                        <Button>
                            {() => {}}
                        </Button>
                    </Example>
                </Blueprint>
                <Blueprint title="Icon" component={Button}>
                    <Example title="default">
                        <Icon/>
                    </Example>
                </Blueprint>
            </Category>
        </Workshop>
    )
}
