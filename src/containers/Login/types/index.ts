export interface LoggedUser {
  email: string;
  token: string;
}

export interface LogingState {
  user: LoggedUser;
}
