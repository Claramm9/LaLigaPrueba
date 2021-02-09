export interface LoggedUser {
  token: string;
}

export interface LogingState {
  user: LoggedUser;
  error: boolean;
}

export interface UserCredentials {
  email: string;
  password: string;
}

export interface LoginAction {
  type: string;
  payload: LoggedUser;
}
