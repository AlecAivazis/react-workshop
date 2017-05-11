// external imports
import React from 'react'
import { mount } from 'enzyme'
// local imports
import { Workbench, Category, Example, Blueprint } from '..'
import findExample from './find-example'

describe('Workbench', function() {
    describe('findExample', () => {
        test('can find the example in a workbench', () => {
            // a component to test with
            const component = mount(
                <Workbench>
                    <Category title="C">
                        <Blueprint title="B">
                            <Example title="E1" children="hello" />
                            <Example title="E2" children="world" />
                        </Blueprint>
                    </Category>
                </Workbench>
            )

            // the selected example state
            const selectedExample = {
                category: 'C',
                blueprint: 'B',
                example: 'E1',
            }

            // try to find the categories in the workbench
            const example = findExample(
                component.props().children,
                selectedExample
            )

            console.log(example)

            // make sure we got a react element back
            expect(React.isValidElement(example)).toBeTruthy()
            // make sure we got an example back
            expect(example.type.name).toEqual('Example')
            // make sure we found the right example
            expect(example.props.children).toEqual('hello')
        })
    })
})
