import { Reducer } from 'redux';
import { UserAction, UserState } from '../types';

export const initialUserState: UserState = {
  list: [],
  // loading: true
};

export const usersReducer: Reducer<UserState, UserAction> = (
  state: UserState = initialUserState,
  action: UserAction
): UserState => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
