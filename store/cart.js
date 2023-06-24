import { createSlice } from "@reduxjs/toolkit";
// import { updateCartData } from "@/firestorefunctions/allfunctions/all.js";

const initialState = {
  totalCount: 0,
  totalAmount: 0,
  data: [],
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCartData(state, action) {
      const { totalamount, totalquantity, cartitems } = action.payload;
      state.totalCount = totalamount;
      state.totalAmount = totalquantity;
      state.data = cartitems;
    },
  },
});

export const cartActions = cart.actions;
export default cart.reducer;

// const cart = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addtocart(state, action) {
//       const { uid, data } = action.payload;
//       const recipeId = data.recipe_id;
//       const existingItem = state.data.find(
//         (item) => item.recipe_id === recipeId
//       );

//       const price = data.price || data.image_url.length || 100;

//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state.data.push({ ...data, quantity: 1, price });
//       }

//       state.totalCount += 1;
//       state.totalAmount += price;

//       updateCartData(uid, state);
//     },
//     removefromcart(state, action) {
//       const { uid, data } = action.payload;
//       const recipeId = data.recipe_id;
//       const existingItem = state.data.find(
//         (item) => item.recipe_id === recipeId
//       );

//       if (existingItem) {
//         if (existingItem.quantity === 1) {
//           state.data = state.data.filter((item) => item.recipe_id !== recipeId);
//         } else {
//           existingItem.quantity -= 1;
//         }

//         state.totalCount -= 1;
//         state.totalAmount -= existingItem.price;
//       }
//       updateCartData(uid, state);
//     },
//     loadcart(state, action) {
//       state.data = action.payload.data;
//       state.totalCount = action.payload.totalCount;
//       state.totalAmount = action.payload.totalAmount;
//     },
//     emptycart(state, action) {
//       const { uid } = action.payload;
//       state.data = [];
//       state.totalCount = 0;
//       state.totalAmount = 0;
//       updateCartData(uid, state);
//     },
//     emptycartlogout(state) {
//       state.data = [];
//       state.totalCount = 0;
//       state.totalAmount = 0;
//     },
//   },
// });

// export const cartActions = cart.actions;
// export default cart.reducer;
