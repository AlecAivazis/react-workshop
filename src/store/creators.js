import * as types from './types'

export const addBlueprint = (bp) => ({
    type: types.ADD_BLUEPRINT,
    payload: bp,
})

export const setFocus = focus => ({
    type: types.SET_FOCUS,
    payload: focus,
})
