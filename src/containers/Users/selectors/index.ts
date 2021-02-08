import { AppState } from '../../../base/types';
import { User } from '../types';

export const getUsers = (state: AppState): User[] => state.users.list;
