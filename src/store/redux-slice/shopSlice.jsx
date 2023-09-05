import { createSlice } from "@reduxjs/toolkit";

//shop
const shopSlice = createSlice({
  name: "shop",
  initialState: { category: "all", keyword: null },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setKeyword(state, action) {
      state.keyword = action.payload;
    },
  },
});

export default shopSlice;
