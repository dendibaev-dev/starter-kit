import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const { reducer: authReducer, actions: authActions } = createSlice({
  name: "auth",
  initialState: {
    isSigned: false,
    isLoading: false,
    success: false,
    errors: false as Record<string, string> | any,
  },
  reducers: {
    loginRequest: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, { payload }: PayloadAction<any>) => {
      state.isLoading = false;
      state.errors = payload.errors;
      state.success = payload.success;
      state.isSigned = true;
    },
    loginFailed: (state) => {
      state.isLoading = false;
      state.errors = { text: "action.failed" };
    },
    logout: (state) => {
      state.success = false;
      state.isSigned = false;
    },
  },
});
