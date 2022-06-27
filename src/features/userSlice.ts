/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface UserState {
  user: object | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<object>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

//Selectors
export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
