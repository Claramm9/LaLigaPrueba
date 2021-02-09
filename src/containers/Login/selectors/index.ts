import { AppState } from '../../../base/types';

export const getLoginToken = (state: AppState): string =>
  state.login.user.token;

export const getLoginError = (state: AppState): boolean => state.login.error;
