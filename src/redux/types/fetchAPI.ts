import {
  FETCH_QUIZZ_REQUEST,
  FETCH_QUIZZ_SUCCESS,
  FETCH_QUIZZ_ERROR
} from '../constants/index';

import { DataType } from './index';

import { ThunkAction } from 'redux-thunk';

import { Action } from 'redux';

import { RootState } from '../reducers/index';

export interface FetchAPIState {
  requesting: boolean;
  success: boolean;
  message: string | null;
  data: DataType | null;
}

export interface FetchQuizzRequest {
  type: typeof FETCH_QUIZZ_REQUEST,
}

export interface FetchQuizzSuccess {
  type: typeof FETCH_QUIZZ_SUCCESS;
  data: DataType;
}

export interface FetchQuizzError {
  type: typeof FETCH_QUIZZ_ERROR,
  message: string
}

export type LoadPostTypes<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export type FetchQuizzActionTypes = FetchQuizzRequest | FetchQuizzError | FetchQuizzSuccess;

