import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: true,
};

export const incomeSlice = createSlice({
  name: "income",
  initialState,
  reducers: {
    open: (state) => {
      state.visible = true;
    },
    close: (state) => {
      state.visible = false;
    },
    toggle: (state) => {
      state.visible = !state.visible;
    },
    custom: (state, action) => {
      state.visible = action.payload;
    },
  },
});

export const { open, close, toggle, custom } = incomeSlice.actions;

export default incomeSlice.reducer;
