// external imports
import React from 'react'
// local imports
import { addBlueprint, setFocus } from './creators'
import { ADD_BLUEPRINT, SET_FOCUS } from './types'

describe('Store', function() {
    describe('Creators', () => {
        test('can add blueprints', () => {
            // the blueprint to add
            const bp = {
                title: "hello",
                category: "hello",
                component: {foo: "bar"}
            }

            expect(addBlueprint(bp)).toEqual({
                type: ADD_BLUEPRINT,
                payload: bp,
            })
        })

        test('can set focus', () => {
            // the blueprint to add
            const focus = {
                category: "hello",
                blueprint: "hello",
            }

            // make sure the internal state is updated
            expect(setFocus(focus)).toEqual({
                type: SET_FOCUS,
                payload: focus,
            })
        })
    })
})
