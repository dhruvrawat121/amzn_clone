import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items:[]
}

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    // actions
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {},
  },
});
export const { addToBasket, removeFromBasket } = basketSlice.actions

// selectors can

export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;