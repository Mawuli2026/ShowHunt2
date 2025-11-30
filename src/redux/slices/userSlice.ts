import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface UserState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
}

const initialState: UserState = {
  isAuthenticated: false,
  user: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.loading = false;
    },
    loginFailure: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
    },
    updateUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, updateUser } = userSlice.actions;
export default userSlice.reducer;