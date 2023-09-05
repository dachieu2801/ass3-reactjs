import { createSlice } from "@reduxjs/toolkit";

//popup
const popUpSlice = createSlice({
  name: "popup",
  initialState: { showPopUp: false, animation: false },
  reducers: {
    trueShow(state) {
      state.showPopUp = true;
    },
    falseShow(state) {
      state.showPopUp = false;
    },
    trueAnimation(state) {
      state.animation = true;
    },
    falseAnimation(state) {
      state.animation = false;
    },
  },
});

export default popUpSlice;
