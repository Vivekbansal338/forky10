// import { createSlice } from "@reduxjs/toolkit";

// const deliveryInitialState = {
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
// const paymentInitialState = {
//   cards: [
//     {
//       bankName: "State Bank Of India",
//       cardNumber: "1234 5678 9012 3456",
//       cardHolder: "John Doe",
//       expirationDate: "12/24",
//       cardChip: "MasterCard",
//       cvv: "123",
//     },
//     {
//       bankName: "Axis Bank",
//       cardNumber: "9876 5432 1098 7654",
//       cardHolder: "Jane Smith",
//       expirationDate: "09/23",
//       cardChip: "Visa",
//       cvv: "456",
//     },
//     {
//       bankName: "HDFC Bank",
//       cardNumber: "5555 1234 5678 9012",
//       cardHolder: "Robert Johnson",
//       expirationDate: "06/25",
//       cardChip: "Rupay",
//       cvv: "789",
//     },
//   ],
// };

// const PaymentDeliverySlice = createSlice({
//   name: "PaymentDelivery",
//   initialState: {
//     delivery: deliveryInitialState,
//     payment: paymentInitialState,
//   },
//   reducers: {
//     addDeliveryAddress(state, action) {
//       const newAddress = {
//         id: state.delivery.addresses.length + 1,
//         ...action.payload,
//       };
//       state.delivery.addresses.push(newAddress);
//     },
//     removeDeliveryAddress(state, action) {
//       const addressId = action.payload;
//       state.delivery.addresses = state.delivery.addresses.filter(
//         (address) => address.id !== addressId
//       );
//     },
//     addCard(state, action) {
//       const newCard = {
//         ...action.payload,
//       };
//       state.payment.cards.push(newCard);
//     },
//     removeCard(state, action) {
//       const cardNumber = action.payload;
//       state.payment.cards = state.payment.cards.filter(
//         (card) => card.cardNumber !== cardNumber
//       );
//     },
//     loadPaymentDelivery(state, action) {
//       state.delivery.addresses = action.payload.delivery;
//       state.payment.cards = action.payload.payment;
//     },
//     clearPaymentDeliverylogout(state) {
//       state.delivery.addresses = [];
//       state.payment.cards = [];
//     },
//   },
// });

// export const PaymentDeliveryActions = PaymentDeliverySlice.actions;
// export default PaymentDeliverySlice.reducer;
