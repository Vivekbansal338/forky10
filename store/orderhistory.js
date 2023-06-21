// example of how 1 object in orders looks like
// {
//   appliedCoupon: {
//     discountRate: 0.1,
//     maximumDiscountAmount: 500,
//     id: 1235,
//   },
//   deliverydetails: {
//     data: {
//       id: 2,
//       name: 'Jane Smith',
//       address: '456 Elm Avenue',
//       city: 'Town',
//       state: 'Province',
//       zipCode: '67890',
//     },
//   },
//   items: [
//     {

//       ingredients: ['ingredient1', 'ingredient2'],
//       recipe_id: '35477',
//       image_url: 'http://forkify-api.herokuapp.com/images/Pizza2BDip2B12B500c4c0a26c.jpg',
//       price: 70
//       publisher: "Closet Cooking"
//       publisher_url: "http://closetcooking.com"
//       quantity: 5
//       social_rank: 99.99999999999994
//       source_url: "http://www.closetcooking.com/2011/03/pizza-dip.html"
//       title: "Pizza Dip"
//     },
//     {
//       publisher: 'Closet Cooking',
//       ingredients: ['ingredient3', 'ingredient4'],
//       source_url: 'http://www.closetcooking.com/2013/02/cauliflower-pizza-crust-with-bbq.html',
//       recipe_id: '41470',
//       image_url: 'http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg',
//       // ...
//     }
//   ],
//   paymentdetails: {
//     data: '1234 5678 9012 3456',
//   },
//   totalAmount: 350,
//   discountAmount: 35,
// };

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

const orderHistorySlice = createSlice({
  name: "orderHistory",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      const order = {
        ...action.payload,
        date: new Date().toISOString(),
      };
      state.orders.push(order);
    },
    clearOrders: (state) => {
      state.orders = [];
    },
  },
});

export const orderHistoryActions = orderHistorySlice.actions;

export default orderHistorySlice.reducer;
