import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// import reducers
import cardsReducer from './reducers';

const rootReducer = combineReducers({
  cardsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));