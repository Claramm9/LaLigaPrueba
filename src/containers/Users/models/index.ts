import { User, UserResponse } from '../types';

export const createUserFromServer = ({
  id,
  first_name,
  last_name,
  avatar,
  email,
}: UserResponse): User => ({
  id,
  firstName: first_name,
  lastName: last_name,
  email,
  avatar,
});

export const createUserListFromServer = (users: UserResponse[]): User[] =>
  users.length ? users.map((user) => createUserFromServer(user)) : [];
