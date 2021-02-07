import { LogingState } from '../../containers/Login/types';
import { UserState } from '../../containers/Users/types';

export interface AppState {
  login: LogingState;
  users: UserState;
}
