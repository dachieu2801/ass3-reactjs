import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./redux-slice/guest-cartSilce";
import popUpSlice from "./redux-slice/PopUpSlice";
import shopSlice from "./redux-slice/shopSlice";
import userSlice from "./redux-slice/userSlice";
import aniCartSlice from "./redux-slice/animation-cart";

const store = configureStore({
  reducer: {
    counter: popUpSlice.reducer,
    shop: shopSlice.reducer,
    cart: cartSlice.reducer,
    user: userSlice.reducer,
    isAniCart: aniCartSlice.reducer,
  },
});
export const popUpAction = popUpSlice.actions;
export const shopAction = shopSlice.actions;
export const cartAction = cartSlice.actions;
export const userAction = userSlice.actions;
export const isAniCartAction = aniCartSlice.actions;

export default store;
