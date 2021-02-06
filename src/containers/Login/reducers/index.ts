import { Reducer } from 'redux';
import { LogingState } from '../types';
import { Action } from '../../../base/types';

export const initialLoginState: LogingState = {
  user: {
    email: '',
    token: '',
  },
};

export const loginReducer: Reducer<LogingState, Action> = (
  state: LogingState = initialLoginState,
  action: Action
): LogingState => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
