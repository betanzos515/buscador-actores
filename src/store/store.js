import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { actorReducer } from '../reducer/actorReducer';

import thunk from 'redux-thunk';
  
const reducers = combineReducers({
    actor: actorReducer
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)