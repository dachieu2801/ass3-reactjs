import { createSlice } from "@reduxjs/toolkit";

//popup
const aniCartSlice = createSlice({
  name: "aniCart",
  initialState: { isAni: false },
  reducers: {
    toggle(state) {
      state.isAni = !state.isAni;
    },
  },
});

export default aniCartSlice;
