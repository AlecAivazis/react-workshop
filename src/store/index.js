// external imports
import { createStore, combineReducers } from 'redux'
// local imports
import * as types from './types'

export const initialState = {
    blueprints: [],
    focus: {
        blueprint: null,
        category: null,
    },
}

export const reducer = (state = initialState, {type, payload}) => {
    // if we are adding a new blueprint
    if (type === types.ADD_BLUEPRINT) {
        return {
            ...state,
            blueprints:  [...state.blueprints, payload]
        }
    }

    // if we are changing the focus
    if (type === types.SET_FOCUS) {
        return {
            ...state,
            focus:  payload,
        }
    }

    // its a type we dont recognize so return the original state
    return state
}

export default createStore(reducer)
export * from './creators'
