// import { createSlice } from "@reduxjs/toolkit";
// import {
//   addBookmark,
//   removeBookmark,
// } from "@/firestorefunctions/allfunctions/all.js";

// const initialState = {
//   bookmarks: [],
// };

// const bookmarkDataSlice = createSlice({
//   name: "bookmarkData",
//   initialState,
//   reducers: {
//     toggleBookmarks(state, action) {
//       const { uid, data } = action.payload;
//       const existingBookmark = state.bookmarks.find(
//         (bookmark) => bookmark.recipe_id === data.recipe_id
//       );
//       if (existingBookmark) {
//         state.bookmarks = state.bookmarks.filter(
//           (bookmark) => bookmark.recipe_id !== data.recipe_id
//         );
//         removeBookmark(uid, data).then(() => {
//           console.log("Bookmark removed successfully");
//         });
//       } else {
//         state.bookmarks.push(data);
//         addBookmark(uid, data).then(() => {
//           console.log("Bookmark added successfully");
//         });
//       }
//     },
//     clearBookmarkslogout(state) {
//       state.bookmarks = [];
//     },
//     loadBookmarks(state, action) {
//       console.log(action.payload, "loading bookmarks");
//       state.bookmarks = action.payload;
//     },
//     clearBookmarks(state) {
//       state.bookmarks = [];
//     },
//   },
// });

// export const BookmarkActions = bookmarkDataSlice.actions;
// export default bookmarkDataSlice.reducer;
