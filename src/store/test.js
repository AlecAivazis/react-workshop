// external imports
import React from 'react'
// local imports
import { addBlueprint, setFocus } from './creators'
import { reducer } from '.'

describe('Store', function() {
    test('can add blueprints', () => {
        // the blueprint to add
        const bp = {
            title: "hello",
            component: {foo: "bar"}
        }

        // add the blueprint to a null state
        const state = reducer(undefined, addBlueprint(bp))

        // make sure the internal state is updated
        expect(state.blueprints).toEqual([bp])
    })

    test('can set focus', () => {
        // the blueprint to add
        const focus = {
            category: "hello",
            blueprint: "hello",
        }

        // add the blueprint to a null state
        const state = reducer(undefined, setFocus(focus))

        // make sure the internal state is updated
        expect(state.focus).toEqual(focus)
    })
})
