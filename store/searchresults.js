// import { createSlice } from "@reduxjs/toolkit";

// const initialState = { data: [], publishers: [], permanentdata: [] };

// const searchResults = createSlice({
//   name: "searchResults",
//   initialState,
//   reducers: {
//     setSearchResults(state, action) {
//       const publishers = new Set();
//       state.data = action.payload.map((item) => {
//         publishers.add(item.publisher);
//         return {
//           ...item,
//           price: item.image_url ? item.image_url.length : 100,
//         };
//       });
//       state.publishers = Array.from(publishers);
//       state.permanentdata = [...state.data];
//     },
//     sortByPriceAsc(state) {
//       state.data.sort((a, b) => a.price - b.price);
//     },
//     sortByPriceDesc(state) {
//       state.data.sort((a, b) => b.price - a.price);
//     },
//   },
// });

// export const searchResultsActions = searchResults.actions;

// export default searchResults.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: [], publishers: [], permanentdata: [] };

const searchResults = createSlice({
  name: "searchResults",
  initialState,
  reducers: {
    setSearchResults(state, action) {
      const publishers = new Set();
      state.data = action.payload.map((item) => {
        publishers.add(item.publisher);
        return {
          ...item,
          price: item.image_url ? item.image_url.length : 100,
        };
      });
      state.publishers = Array.from(publishers);
      state.permanentdata = [...state.data];
    },
    sortByPriceAsc(state) {
      state.data.sort((a, b) => a.price - b.price);
    },
    sortByPriceDesc(state) {
      state.data.sort((a, b) => b.price - a.price);
    },
    filterByPublisher(state, action) {
      if (action.payload === "All") {
        state.data = [...state.permanentdata];
      } else {
        state.data = state.permanentdata.filter(
          (item) => item.publisher === action.payload
        );
      }
    },
  },
});

export const searchResultsActions = searchResults.actions;

export default searchResults.reducer;
