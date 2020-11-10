import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reduxLogger from 'redux-logger';

import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const middleware = [reduxLogger, thunk];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

export const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
)