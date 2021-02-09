import axios from 'axios';
import { Dispatch } from 'redux';
import * as ActionTypes from '../actionTypes';

export const getUsersList = () => async (dispatch: Dispatch): Promise<void> => {
  try {
    const res = await axios.get('https://reqres.in/api/users');
    dispatch({
      type: ActionTypes.GET_USERS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.GET_USERS_ERROR,
      payload: error,
    });
  }
};

export const getUserDetails = (id: number) => async (
  dispatch: Dispatch
): Promise<void> => {
  try {
    const res = await axios.get(
      'https://reqres.in/api/users/:id'.replace(':id', id.toString())
    );
    dispatch({
      type: ActionTypes.GET_USER_DETAILS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.GET_USER_DETAILS_ERROR,
      payload: error,
    });
  }
};

export const deleteUserRequest = (id: number) => async (
  dispatch: Dispatch
): Promise<void> => {
  try {
    const res = await axios.delete(
      'https://reqres.in/api/users/:id'.replace(':id', id.toString())
    );
    dispatch({
      type: ActionTypes.DELETE_USER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.DELETE_USER_ERROR,
      payload: error,
    });
  }
};

export const updateUserRequest = (
  email: string,
  firstName: string,
  lastName: string,
  id: number
) => async (dispatch: Dispatch): Promise<void> => {
  try {
    const res = await axios.put(
      'https://reqres.in/api/users/:id'.replace(':id', id.toString()),
      {
        email,
        first_name: firstName,
        last_name: lastName,
      }
    );
    dispatch({
      type: ActionTypes.UPDATE_USER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.UPDATE_USER_ERROR,
      payload: error,
    });
  }
};
