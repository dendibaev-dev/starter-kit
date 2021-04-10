import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const {
  reducer: testReducer,
  actions: testActions,
} = createSlice({
  name: "test",
  initialState: {
    isLoading: false,
    errors: {},
    list: [] as Record<string, any>[],
  },
  reducers: {
    fetchAllRequest: (state) => {
      state.isLoading = true;
    },
    fetchAllSuccess: (state, { payload }: PayloadAction<any>) => {
      state.isLoading = false;
      state.list = payload;
    },
    fetchAllFailed: (state) => {
      state.isLoading = false;
    },
  },
});
