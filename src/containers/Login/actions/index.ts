import axios from 'axios';
import { Dispatch } from 'redux';
import {
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  RESET_TOKEN,
} from '../actionTypes';
import { UserCredentials } from '../types';

export const loginUser = (user: UserCredentials) => async (
  dispatch: Dispatch
): Promise<void> => {
  try {
    const res = await axios.post('https://reqres.in/api/login', {
      email: user.email,
      password: user.password,
    });
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_USER_ERROR,
      payload: error,
    });
  }
};

export const resetToken = () => async (dispatch: Dispatch): Promise<void> => {
  dispatch({
    type: RESET_TOKEN,
  });
};
