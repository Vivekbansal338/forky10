"use client";

import { configureStore } from "@reduxjs/toolkit";
import searchResultsReducer from "./searchresults.js";
import cartReducer from "./cart.js";
// import deliveryReducer from "./delivery.js";
// import paymentReducer from "./paymentcards.js";
import discountReducer from "./discount.js";
import selectedOrderDetailsReducer from "./selectedorderdetails.js";
// import bookmarkReducer from "./bookmark.js";
import orderHistoryReducer from "./orderhistory.js";
import userauthReducer from "./userauth.js";
import SearchitemsReducer from "./searchitems.js";
// import PaymentDeliveryReducer from "./PaymentDelivery.js";

export const store = configureStore({
  reducer: {
    searchdata: searchResultsReducer,
    cart: cartReducer,
    // delivery: deliveryReducer,
    // payment: paymentReducer,
    discount: discountReducer,
    selectedOrderDetails: selectedOrderDetailsReducer,
    // bookmarkData: bookmarkReducer,
    orderHistory: orderHistoryReducer,
    userauth: userauthReducer,
    searchitems: SearchitemsReducer,
    // PaymentDelivery: PaymentDeliveryReducer,
  },
});
