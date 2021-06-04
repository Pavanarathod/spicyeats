import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipeName: null,
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    getRecipeName: (state, action) => {
      state.recipeName = action.payload;
    },
  },
});

export const { getRecipeName } = recipeSlice.actions;

export const selectRecipeName = (state) => state.recipe.recipeName;

export default recipeSlice.reducer;
