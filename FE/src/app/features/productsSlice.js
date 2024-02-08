import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    categories: {},
  },
  reducers: {
    addProduct: (state, action) => {
      const { category, item } = action.payload;
      if (!state.categories[category]) {
        state.categories[category] = [];
      }
      const existingItem = state.categories[category].find(
        (existingItem) => existingItem.item === item
      );
      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.categories[category].push({ item, count: 1 });
      }
    },

    removeProduct: (state, action) => {
      const { category, item } = action.payload;
      const index = state.categories[category].findIndex(
        (existingItem) => existingItem.item === item
      );
      if (index !== -1) {
        if (state.categories[category][index].count === 1) {
          state.categories[category].splice(index, 1);
        } else {
          state.categories[category][index].count--;
        }
        if (state.categories[category].length === 0) {
          delete state.categories[category];
        }
      }
    },
  },
});

export const { addProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;
