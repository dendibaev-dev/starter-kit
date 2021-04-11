import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const {
  reducer: currentLocaleReducer,
  actions: currentLocaleActions,
} = createSlice({
  name: "current-locale",
  initialState: "ru",
  reducers: {
    handleLocale: (_, { payload }: PayloadAction<string>) => payload,
  },
});
