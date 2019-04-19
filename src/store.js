import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import egg from './state/egg.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    egg,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)