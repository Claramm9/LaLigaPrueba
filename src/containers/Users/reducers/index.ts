import { Reducer } from 'redux';
import { UserState } from '../types';
import { Action } from '../../../base/types';

export const initialUserState: UserState = {
  list: [],
};

export const usersReducer: Reducer<UserState, Action> = (
  state: UserState = initialUserState,
  action: Action
): UserState => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
