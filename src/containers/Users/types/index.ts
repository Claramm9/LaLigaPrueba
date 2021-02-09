export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
}

export interface UserResponse {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

export interface UserState {
  list: User[];
  selectedUser: User;
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}

interface UserPayload {
  data: UserResponse[];
  page: number;
  per_page: number;
  support: { url: string };
  total: number;
  total_pages: number;
}

export interface UserAction {
  type: string;
  payload: UserPayload;
}
