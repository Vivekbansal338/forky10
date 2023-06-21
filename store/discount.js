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
