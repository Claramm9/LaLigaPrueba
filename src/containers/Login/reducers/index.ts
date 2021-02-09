import { Reducer } from 'redux';
import { LoginAction, LogingState } from '../types';
import * as ActionTypes from '../actionTypes';

export const initialLoginState: LogingState = {
  user: {
    token: '',
  },
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
      };
    case ActionTypes.RESET_TOKEN:
      return {
        ...state,
        user: { token: '' },
      };
    case ActionTypes.LOGIN_USER_ERROR:
      // add error handler for improvement
      return { ...state };
    default:
      return { ...state };
  }
};
