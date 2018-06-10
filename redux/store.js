import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';

export default function (initialState) {
  return createStore(reducer, initialState, (
    process.env.NODE_ENV === 'production' ? compose : composeWithDevTools
  )(applyMiddleware(thunkMiddleware)));
}
