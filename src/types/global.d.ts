export interface Category {
  id: string;
  name: string;
  icon?: string;
}

export interface UserState {
  isAuthenticated: boolean;
  name?: string;
}