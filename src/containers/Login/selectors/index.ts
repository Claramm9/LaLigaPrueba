import { AppState } from '../../../base/types';

export const getLoginToken = (state: AppState): string =>
  state.login.user.token;
