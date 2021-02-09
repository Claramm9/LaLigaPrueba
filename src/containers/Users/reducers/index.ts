import { Reducer } from 'redux';
import { User, UserAction, UserResponse, UserState } from '../types';
import * as ActionTypes from '../actionTypes';
import { createUserFromServer, createUserListFromServer } from '../models';

export const initialUserState: UserState = {
  list: [],
  selectedUser: {} as User,
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
        selectedUser: createUserFromServer(
          (action.payload.data as unknown) as UserResponse
        ),
      };
    case ActionTypes.DELETE_USER_SUCCESS:
      return {
        ...state,
        list: createUserListFromServer(action.payload.data),
      };
    case ActionTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        selectedUser: createUserFromServer({
          ...state.selectedUser,
          ...((action.payload as unknown) as UserResponse),
        }),
      };
    case ActionTypes.GET_USERS_ERROR:
    case ActionTypes.GET_USER_DETAILS_ERROR:
    case ActionTypes.DELETE_USER_ERROR:
    case ActionTypes.UPDATE_USER_ERROR:
      // add error handler as improvement
      return { ...state };
    default:
      return { ...state };
  }
};
