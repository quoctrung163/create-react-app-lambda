import { LoadPostTypes } from '../types/fetchAPI';

import { FETCH_QUIZZ_ERROR, FETCH_QUIZZ_REQUEST, FETCH_QUIZZ_SUCCESS } from '../constants/index';

export const loadPosts = (): LoadPostTypes => async dispatch => {
  try {
    dispatch({ type: FETCH_QUIZZ_REQUEST });

    const url = "https://bright-capable-syzygy.glitch.me/dreams";
    const response = await fetch(url)
    const responseBody = await response.json();
    dispatch({
      type: FETCH_QUIZZ_SUCCESS,
      data: responseBody
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: FETCH_QUIZZ_ERROR,
      message: error
    });
  }
}