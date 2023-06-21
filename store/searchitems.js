import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [
    {
      category: "Vegetables",
      items: [
        { name: "Carrot", url: "carrot.png" },
        { name: "Broccoli", url: "broccoli.png" },
        { name: "Asparagus", url: "asparagus.png" },
        { name: "Cauliflower", url: "cauliflower.png" },
        { name: "Corn", url: "corn.png" },
        { name: "Cucumber", url: "cucumber.png" },
        { name: "Green pepper", url: "green_pepper.png" },
        { name: "Lettuce", url: "lettuce.png" },
        { name: "Mushrooms", url: "mushrooms.png" },
        { name: "Onion", url: "onion.png" },
        { name: "Potato", url: "potato.png" },
        { name: "Pumpkin", url: "pumpkin.png" },
        { name: "Red pepper", url: "red_pepper.png" },
        { name: "Tomato", url: "tomato.png" },
        { name: "Beetroot", url: "beetroot.png" },
        { name: "Brussel sprouts", url: "brussel_sprouts.png" },
        { name: "Zucchini", url: "zucchini.png" },
        { name: "Radish", url: "radish.png" },
        { name: "Sweet potato", url: "sweet_potato.png" },
        { name: "Artichoke", url: "artichoke.png" },
        { name: "Leek", url: "leek.png" },
        { name: "Cabbage", url: "cabbage.png" },
        { name: "Celery", url: "celery.png" },
      ],
    },
    {
      category: "Fruits",
      items: [
        { name: "Apple", url: "apple.png" },
        { name: "Banana", url: "banana.png" },
        { name: "Grapes", url: "grapes.png" },
        { name: "Orange", url: "orange.png" },
        { name: "Pineapple", url: "pineapple.png" },
        { name: "Strawberry", url: "strawberry.png" },
        { name: "Watermelon", url: "watermelon.png" },
      ],
    },
    {
      category: "Herbs",
      items: [
        { name: "Basil", url: "basil.png" },
        { name: "Cilantro", url: "cilantro.png" },
        { name: "Dill", url: "dill.png" },
        { name: "Mint", url: "mint.png" },
        { name: "Parsley", url: "parsley.png" },
        { name: "Rosemary", url: "rosemary.png" },
        { name: "Thyme", url: "thyme.png" },
      ],
    },
  ],
};

const searchitems = createSlice({
  name: "searchitems",
  initialState,
  reducers: {
    loadsearchitems(state, action) {
      state.data = action.payload;
    },
  },
});

export const searchitemsActions = searchitems.actions;
export default searchitems.reducer;
