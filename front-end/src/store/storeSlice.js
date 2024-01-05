import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const storeSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        // Check if item.quantity exists before incrementing
        item.quantity = (item.quantity || 0) + action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    increaseQuantity(state, action) {
      const item = state.products.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity(state, action) {
      const item = state.products.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    deleteItem(state, action) {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    Reset(state) {
      state.products = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  Reset,
  deleteItem,
} = storeSlice.actions;

export default storeSlice.reducer;
