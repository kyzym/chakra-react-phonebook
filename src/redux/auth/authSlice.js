import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload: { user, token } }) => {
      // console.log(state, 'state in setCredentials');
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
    },
    unsetCredentials: (state, _) => {
      // console.log(state, 'state in UNsetCredentials');
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setCredentials, unsetCredentials } = authSlice.actions;

export default authSlice;
