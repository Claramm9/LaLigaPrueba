export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface UserState {
  list: User[];  
}