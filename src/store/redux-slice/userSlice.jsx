import { createSlice } from "@reduxjs/toolkit";

const updateCurUser = (state) => {
  localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
};

let initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [],
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //add user
    addUser(state, action) {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    updateUsers(state, action) {
      const curUser = { ...action.payload };
      //tìm vị trí  của curUser
      // const user = state.users.find((user) => user.email === curUser.email);
      const i = state.users.findIndex((user) => user.email === curUser.email);
      state.users.splice(i, 1, curUser);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    currentUser(state, action) {
      state.currentUser = action.payload;
      updateCurUser(state);
    },
    removeCurUser(state) {
      localStorage.removeItem("currentUser");
      state.currentUser = null;
    },
    addCart(state, action) {
      const product = { ...action.payload };
      // console.log(product);
      if (product.quantity > 0) {
        if (state.currentUser === null) {
          state.currentUser.cart = [product];
          updateCurUser(state);
        } else {
          //xem  product da ton tai hay chua
          const addProduct = state.currentUser.cart.find(
            (a) => product["_id"]["$oid"] === a["_id"]["$oid"]
          );
          if (addProduct) {
            const i = state.currentUser.cart.findIndex(
              (a) => product["_id"]["$oid"] === a["_id"]["$oid"]
            );
            addProduct.quantity += product.quantity;
            state.currentUser.cart.splice(i, 1, addProduct);
            updateCurUser(state);
          } else {
            state.currentUser.cart = [...state.currentUser.cart, product];
            updateCurUser(state);
          }
        }
      }
    },
    minus(state, action) {
      const product = { ...action.payload };
      const minusProduct = state.currentUser.cart.find(
        (a) => product["_id"]["$oid"] === a["_id"]["$oid"]
      );
      const i = state.currentUser.cart.findIndex(
        (a) => product["_id"]["$oid"] === a["_id"]["$oid"]
      );
      minusProduct.quantity -= 1;
      state.currentUser.cart.splice(i, 1, minusProduct);
      updateCurUser(state);
    },
    plus(state, action) {
      const product = { ...action.payload };
      const plusProduct = state.currentUser.cart.find(
        (a) => product["_id"]["$oid"] === a["_id"]["$oid"]
      );
      const i = state.currentUser.cart.findIndex(
        (a) => product["_id"]["$oid"] === a["_id"]["$oid"]
      );
      plusProduct.quantity += 1;
      state.currentUser.cart.splice(i, 1, plusProduct);
      updateCurUser(state);
    },
    remove(state, action) {
      const i = state.currentUser.cart.findIndex(
        (a) => action.payload === a["_id"]["$oid"]
      );
      state.currentUser.cart.splice(i, 1);
      updateCurUser(state);
    },
  },
});

export default userSlice;
