import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    signInFaliure: (state) => {},
  },
});

export const { signInStart, signInSuccess, signInFaliure } = userSlice.actions;

export default userSlice.reducer;
