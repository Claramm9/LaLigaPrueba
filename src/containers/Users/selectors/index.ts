import { AppState } from '../../../base/types';
import { User } from '../types';

export const getUsers = (state: AppState): User[] => state.users.list;
export const getSelectedUser = (state: AppState): User =>
  state.users.selectedUser;
