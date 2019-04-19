import { createStore, combineReducers } from 'redux'
import egg from './state/egg.js'

const reducer = combineReducers({
    egg
})

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)