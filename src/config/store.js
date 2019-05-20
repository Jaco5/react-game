import { createStore, combineReducers } from 'redux'
import playerReducer from '../Features/Player/reducer'
import mapReducer from '../Features/Map/reducer';

const rootReducer = combineReducers({
    player : playerReducer,
    map : mapReducer,
}) 

const store = createStore (
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store