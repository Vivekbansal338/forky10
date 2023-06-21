import { createSlice } from "@reduxjs/toolkit";
import { addBookmark } from "@/firestorefunctions/allfunctions/all.js";

const initialState = {
  bookmarks: [],
};

// export const selectIsBookmarked = (state, recipeId) => {
//   console.log(state);
//   const existingBookmark = state.bookmarks.find(
//     (bookmark) => bookmark.recipe_id === recipeId
//   );
//   return Boolean(existingBookmark);
// };

export const selectIsBookmarked = (data, recipeId) => {
  if (!data) return false;
  console.log("hello", data, recipeId);
  // console.log(data);
  // for (let i = 0; i < data.bookmarks.length; i++) {
  //   if (data.bookmarks[i].recipe_id === recipeId) {
  //     return true;
  //   }
  // }
  return false;
};
const bookmarkDataSlice = createSlice({
  name: "bookmarkData",
  initialState,
  reducers: {
    // async toggleBookmarks(state, action) {
    //   const { uid, data } = action.payload;
    //   const existingBookmark = state.bookmarks.find(
    //     (bookmark) => bookmark.recipe_id === data.recipe_id
    //   );
    //   if (existingBookmark) {
    //     state.bookmarks = state.bookmarks.filter(
    //       (bookmark) => bookmark.recipe_id !== data.recipe_id
    //     );
    //   } else {
    //     state.bookmarks.push(data);
    //     await addBookmark(uid, data);
    //   }
    // },
    toggleBookmarks(state, action) {
      const { uid, data } = action.payload;
      const existingBookmark = state.bookmarks.find(
        (bookmark) => bookmark.recipe_id === data.recipe_id
      );
      if (existingBookmark) {
        state.bookmarks = state.bookmarks.filter(
          (bookmark) => bookmark.recipe_id !== data.recipe_id
        );
        addBookmark(uid, data).then(() => {
          console.log("Bookmark removed successfully");
        });
      } else {
        state.bookmarks.push(data);
        addBookmark(uid, data).then(() => {
          console.log("Bookmark added successfully");
        });
      }
    },
    clearBookmarkslogout(state) {
      state.bookmarks = [];
    },
    loadBookmarks(state, action) {
      console.log(action.payload, "loading bookmarks");
      state.bookmarks = action.payload;
    },
    clearBookmarks(state) {
      state.bookmarks = [];
    },
  },
});

export const BookmarkActions = bookmarkDataSlice.actions;
export default bookmarkDataSlice.reducer;
