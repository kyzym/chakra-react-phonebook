import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthRegisterResponse } from 'types/types';

export interface AuthInitialState extends AuthRegisterResponse {
  isLoggedIn: boolean;
}

const initialState: AuthInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthRegisterResponse>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    unsetCredentials: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setCredentials, unsetCredentials } = authSlice.actions;

export default authSlice;
