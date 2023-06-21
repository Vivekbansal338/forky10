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
