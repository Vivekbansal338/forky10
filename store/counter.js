import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.data++;
    },
  },
});

export const counterSliceActions = counterSlice.actions;

export default counterSlice.reducer;
