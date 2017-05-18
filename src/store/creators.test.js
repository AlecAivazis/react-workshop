// external imports
import React from 'react'
// local imports
import { addBlueprint } from './creators'
import { ADD_BLUEPRINT } from './types'

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
    })
})
