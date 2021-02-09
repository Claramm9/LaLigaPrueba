import { Reducer } from 'redux';
import { LoginAction, LogingState } from '../types';
import * as ActionTypes from '../actionTypes';

export const initialLoginState: LogingState = {
  user: {
    token: '',
  },
  error: false,
};

export const loginReducer: Reducer<LogingState, LoginAction> = (
  state: LogingState = initialLoginState,
  action: LoginAction
): LogingState => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: false,
      };
    case ActionTypes.RESET_TOKEN:
      return {
        ...state,
        user: { token: '' },
        error: false,
      };
    case ActionTypes.LOGIN_USER_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return { ...state };
  }
};
