import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarks: [],
};

export const selectIsBookmarked = (state, recipeId) => {
  const existingBookmark = state.bookmarkData.bookmarks.find(
    (bookmark) => bookmark.recipe_id === recipeId
  );
  return Boolean(existingBookmark);
};

const bookmarkDataSlice = createSlice({
  name: "bookmarkData",
  initialState,
  reducers: {
    toggleBookmark(state, action) {
      const existingBookmark = state.bookmarks.find(
        (bookmark) => bookmark.recipe_id === action.payload.recipe_id
      );

      if (existingBookmark) {
        state.bookmarks = state.bookmarks.filter(
          (bookmark) => bookmark.recipe_id !== action.payload.recipe_id
        );
      } else {
        state.bookmarks.push(action.payload);
      }
    },
    clearBookmarks(state) {
      state.bookmarks = [];
    },
  },
});

export const BookmarkActions = bookmarkDataSlice.actions;
export default bookmarkDataSlice.reducer;




import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalCount: 0,
  totalAmount: 0,
  data: [],
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart(state, action) {
      const recipeId = action.payload.recipe_id;
      const existingItem = state.data.find(
        (item) => item.recipe_id === recipeId
      );

      const price =
        action.payload.price || action.payload.image_url.length || 100;

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.data.push({ ...action.payload, quantity: 1, price });
      }

      state.totalCount += 1;
      state.totalAmount += price;
    },
    removefromcart(state, action) {
      const recipeId = action.payload.recipe_id;
      const existingItem = state.data.find(
        (item) => item.recipe_id === recipeId
      );

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.data = state.data.filter((item) => item.recipe_id !== recipeId);
        } else {
          existingItem.quantity -= 1;
        }

        state.totalCount -= 1;
        state.totalAmount -= existingItem.price;
      }
    },
    emptycart(state) {
      state.data = [];
      state.totalCount = 0;
      state.totalAmount = 0;
    },
  },
});

export const cartActions = cart.actions;
export default cart.reducer;



import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coupons: [
    {
      id: 1234,
      couponCode: "SUMMER20",
      discountRate: 0.2,
      maximumDiscount: 500,
      minimumValidityAmount: 400,
      expirationDate: "2023-08-31",
    },
    {
      id: 1235,
      couponCode: "SAVE10NOW",
      discountRate: 0.1,
      maximumDiscount: 500,
      minimumValidityAmount: 300,
      expirationDate: "2023-12-31",
    },
    {
      id: 1236,
      couponCode: "SUMMER10",
      discountRate: 1.0,
      maximumDiscount: 500,
      minimumValidityAmount: 200,
      expirationDate: null,
    },
    {
      id: 1237,
      couponCode: "FLASHSALE25",
      discountRate: 0.25,
      maximumDiscount: 500,
      minimumValidityAmount: 100,
      expirationDate: "2023-06-30",
    },
  ],
};

const couponsSlice = createSlice({
  name: "coupons",
  initialState,
  reducers: {
    addCoupon(state, action) {
      state.coupons.push(action.payload);
    },
    removeCoupon(state, action) {
      const couponId = action.payload;
      state.coupons = state.coupons.filter((coupon) => coupon.id !== couponId);
    },
  },
});

export const couponsActions = couponsSlice.actions;
export default couponsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addresses: [
    {
      id: 1,
      name: "John Doe",
      address: "123 Main Street",
      city: "City",
      state: "State",
      zipCode: "12345",
    },
    {
      id: 2,
      name: "Jane Smith",
      address: "456 Elm Avenue",
      city: "Town",
      state: "Province",
      zipCode: "67890",
    },
    {
      id: 3,
      name: "Robert Johnson",
      address: "789 Oak Drive",
      city: "Village",
      state: "County",
      zipCode: "13579",
    },
  ],
};

const deliverySlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {
    addDeliveryAddress(state, action) {
      const newAddress = {
        id: state.addresses.length + 1,
        ...action.payload,
      };
      state.addresses.push(newAddress);
    },
    removeDeliveryAddress(state, action) {
      const addressId = action.payload;
      state.addresses = state.addresses.filter(
        (address) => address.id !== addressId
      );
    },
  },
});

export const deliveryActions = deliverySlice.actions;
export default deliverySlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deliveryDetails: null,
  paymentCardDetails: null,
  discountCouponDetails: null, //{discountRate: discountRate,maximumDiscountAmount: maximumDiscount,id:1235}
};

const selectedOrderDetailsSlice = createSlice({
  name: "selectedOrderDetails",
  initialState,
  reducers: {
    setDeliveryDetails(state, action) {
      state.deliveryDetails = action.payload;
    },
    setPaymentCardDetails(state, action) {
      state.paymentCardDetails = action.payload;
    },
    setDiscountCouponDetails(state, action) {
      state.discountCouponDetails = action.payload;
    },
    clearOrderDetails(state) {
      state.deliveryDetails = null;
      state.paymentCardDetails = null;
      state.discountCouponDetails = null;
    },
  },
});

export const selectedOrderDetailsSliceActions =
  selectedOrderDetailsSlice.actions;
export default selectedOrderDetailsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [
    {
      bankName: "State Bank Of India",
      cardNumber: "1234 5678 9012 3456",
      cardHolder: "John Doe",
      expirationDate: "12/24",
      cardChip: "MasterCard",
      cvv: "123",
    },
    {
      bankName: "Axis Bank",
      cardNumber: "9876 5432 1098 7654",
      cardHolder: "Jane Smith",
      expirationDate: "09/23",
      cardChip: "Visa",
      cvv: "456",
    },
    {
      bankName: "HDFC Bank",
      cardNumber: "5555 1234 5678 9012",
      cardHolder: "Robert Johnson",
      expirationDate: "06/25",
      cardChip: "Rupay",
      cvv: "789",
    },
  ],
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    addCard(state, action) {
      const newCard = {
        ...action.payload,
      };
      state.cards.push(newCard);
    },
    removeCard(state, action) {
      const cardNumber = action.payload;
      state.cards = state.cards.filter(
        (card) => card.cardNumber !== cardNumber
      );
    },
  },
});

export const paymentActions = paymentSlice.actions;
export default paymentSlice.reducer;


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
