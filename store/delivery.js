// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   addresses: [
//     {
//       id: 1,
//       name: "John Doe",
//       address: "123 Main Street",
//       city: "City",
//       state: "State",
//       zipCode: "12345",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       address: "456 Elm Avenue",
//       city: "Town",
//       state: "Province",
//       zipCode: "67890",
//     },
//     {
//       id: 3,
//       name: "Robert Johnson",
//       address: "789 Oak Drive",
//       city: "Village",
//       state: "County",
//       zipCode: "13579",
//     },
//   ],
// };

// const deliverySlice = createSlice({
//   name: "delivery",
//   initialState,
//   reducers: {
//     addDeliveryAddress(state, action) {
//       const newAddress = {
//         id: state.addresses.length + 1,
//         ...action.payload,
//       };
//       state.addresses.push(newAddress);
//     },
//     removeDeliveryAddress(state, action) {
//       const addressId = action.payload;
//       state.addresses = state.addresses.filter(
//         (address) => address.id !== addressId
//       );
//     },
//   },
// });

// export const deliveryActions = deliverySlice.actions;
// export default deliverySlice.reducer;
