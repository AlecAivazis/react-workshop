// external imports
import React from 'react'
import { Provider } from 'react-redux'
// local imports
import store from '../../store'

const WorkshopProvider = ({...unused}) => <Provider store={store} {...unused} />

export default WorkshopProvider
