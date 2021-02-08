import { Reducer } from 'redux';
import { UserAction, UserState } from '../types';
import * as ActionTypes from '../actionTypes';
import { createUserFromServer, createUserListFromServer } from '../models';

export const initialUserState: UserState = {
  list: [],
  selectedUser: undefined,
  page: 1,
  perPage: 6,
  total: 0,
  totalPages: 1,
};

export const usersReducer: Reducer<UserState, UserAction> = (
  state: UserState = initialUserState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case ActionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        list: createUserListFromServer(action.payload.data),
        page: action.payload.page,
        perPage: action.payload.per_page,
        total: action.payload.total,
        totalPages: action.payload.total_pages,
      };
    case ActionTypes.GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        selectedUser: createUserFromServer(action.payload.data),
      };
    case ActionTypes.DELETE_USER_SUCCESS:
      return {
        ...state,
        list: createUserListFromServer(action.payload.data),
      };
    case ActionTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        list: createUserListFromServer(action.payload.data),
      };
    case ActionTypes.GET_USERS_ERROR:
    case ActionTypes.GET_USER_DETAILS_ERROR:
    case ActionTypes.DELETE_USER_ERROR:
    case ActionTypes.UPDATE_USER_ERROR:
      // add error handler
      return { ...state };
    default:
      return { ...state };
  }
};
