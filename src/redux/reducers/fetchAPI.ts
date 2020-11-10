import { FetchAPIState, FetchQuizzActionTypes } from '../types/fetchAPI';

import {
  FETCH_QUIZZ_REQUEST,
  FETCH_QUIZZ_SUCCESS,
  FETCH_QUIZZ_ERROR
} from '../constants/index';

const initialState: FetchAPIState = {
  requesting: false,
  success: false,
  message: null,
  data: null
};

export function fetchAPIReducer(
  state = initialState,
  payload: FetchQuizzActionTypes
): FetchAPIState {
  switch (payload.type) {
    case FETCH_QUIZZ_REQUEST:
      return {
        ...state,
        requesting: true
      };
    
    case FETCH_QUIZZ_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: true,
        data: payload.data
      }
    
    case FETCH_QUIZZ_ERROR:
      return {
        ...state,
        requesting: false,
        message: payload.message
      };
    
    default:
      return state;
  }
}

export default fetchAPIReducer;