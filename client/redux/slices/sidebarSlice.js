import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: true,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
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

export const { open, close, toggle, custom } = sidebarSlice.actions;

export default sidebarSlice.reducer;
