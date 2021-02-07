export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
}

export interface UserState {
  list: User[];
}

export interface UserAction {
  type: string;
  payload: User;
}
