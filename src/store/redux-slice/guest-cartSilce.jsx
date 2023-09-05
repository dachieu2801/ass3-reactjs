import { createSlice } from "@reduxjs/toolkit";

//cart
const cartSlice = createSlice({
  name: "cart",
  initialState: { products: [] },
  reducers: {
    add(state, action) {
      const product = { ...action.payload };
      if (product.quantity > 0) {
        if (state.products.length === 0) {
          state.products = [...state.products, product];
        } else {
          //xem  product da ton tai hay chua
          const addProduct = state.products.find(
            (a) => product["_id"]["$oid"] === a["_id"]["$oid"]
          );
          if (addProduct) {
            const i = state.products.findIndex(
              (a) => product["_id"]["$oid"] === a["_id"]["$oid"]
            );
            addProduct.quantity += product.quantity;
            state.products.splice(i, 1, addProduct);
          } else {
            state.products = [...state.products, product];
          }
        }
      }
    },
    remove(state, action) {
      const i = state.products.findIndex(
        (a) => action.payload === a["_id"]["$oid"]
      );
      state.products.splice(i, 1);
    },
    minus(state, action) {
      const product = { ...action.payload };
      const minusProduct = state.products.find(
        (a) => product["_id"]["$oid"] === a["_id"]["$oid"]
      );
      const i = state.products.findIndex(
        (a) => product["_id"]["$oid"] === a["_id"]["$oid"]
      );
      minusProduct.quantity -= 1;
      state.products.splice(i, 1, minusProduct);
    },
    plus(state, action) {
      const product = { ...action.payload };
      const plusProduct = state.products.find(
        (a) => product["_id"]["$oid"] === a["_id"]["$oid"]
      );
      const i = state.products.findIndex(
        (a) => product["_id"]["$oid"] === a["_id"]["$oid"]
      );
      plusProduct.quantity += 1;
      state.products.splice(i, 1, plusProduct);
    },
  },
});

export default cartSlice;
