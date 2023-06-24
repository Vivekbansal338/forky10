// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
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

// const paymentSlice = createSlice({
//   name: "payment",
//   initialState,
//   reducers: {
//     addCard(state, action) {
//       const newCard = {
//         ...action.payload,
//       };
//       state.cards.push(newCard);
//     },
//     removeCard(state, action) {
//       const cardNumber = action.payload;
//       state.cards = state.cards.filter(
//         (card) => card.cardNumber !== cardNumber
//       );
//     },
//   },
// });

// export const paymentActions = paymentSlice.actions;
// export default paymentSlice.reducer;
