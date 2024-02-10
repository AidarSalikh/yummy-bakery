import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalPrice: null,
};

function calculate(state) {
  return state.reduce((acc, a) => acc + a.price * a.count, 0);
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = state.cart.find((item) => item.id === action.payload.id);
      if (newItem) {
        newItem.count++;
      } else {
        state.cart.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = calculate(state.cart);
    },
    removeFromCart(state, action) {
      const cartItem = state.cart.find((item) => item.id === action.payload.id);
      if (!cartItem) return;
      if (cartItem.count > 0) {
        cartItem.count--;
      }
      if (cartItem.count === 0) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      }
      state.totalPrice = calculate(state.cart);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
