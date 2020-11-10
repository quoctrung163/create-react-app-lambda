import { combineReducers } from 'redux';
import fetchAPIReducer from './fetchAPI';

const rootReducer = combineReducers({
  fetchAPI: fetchAPIReducer
});

export type RootState = ReturnType<typeof rootReducer>;

// eslint-disable-next-line import/no-anonymous-default-export
export default (state: any, action: any) => rootReducer(state, action);