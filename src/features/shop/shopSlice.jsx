import { createSlice } from "@reduxjs/toolkit";
import { items } from "../../data/data";

const initialState = {
  shop: items,
  totalPrice: null,
};

function calculate(state) {
  return state.reduce((acc, a) => acc + a.price * a.count, 0);
}

function getSingleItem(state, id) {
  return state.shop.find((item) => item.id === id);
}

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToCart(state, action) {
      const singleItem = getSingleItem(state, action.payload.id);
      if (singleItem) {
        singleItem.count++;
      }
      state.totalPrice = calculate(state.shop);
    },
    removeFromCart(state, action) {
      const singleItem = getSingleItem(state, action.payload.id);
      if (singleItem.count > 0) {
        singleItem.count--;
      }
      state.totalPrice = calculate(state.shop);
    },
    deleteFromCart(state, action) {
      const singleItem = getSingleItem(state, action.payload.id);
      singleItem.count = 0;
      state.totalPrice = calculate(state.shop);
    },
  },
});

export const { addToCart, removeFromCart, deleteFromCart } = shopSlice.actions;
export const selectAllItems = (state) => state.shop.shop;
export const getTotalPrice = (state) => state.shop.totalPrice;
export default shopSlice.reducer;
