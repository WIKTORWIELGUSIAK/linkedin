/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface UserState {
  user: User;
}
export interface User {
  email: string | null;
  uid: string | null;
  displayName: string | null;
  photoUrl: string | null;
}

const initialState: UserState = {
  user: {
    email: "",
    uid: "",
    displayName: "",
    photoUrl: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = { email: "", uid: "", displayName: "", photoUrl: "" };
    },
  },
});

export const { login, logout } = userSlice.actions;

//Selectors
export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
