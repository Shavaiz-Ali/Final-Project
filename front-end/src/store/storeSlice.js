import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const storeSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
      addToCart(state, action) {
        const { item, quantity } = action.payload;
        const existingProductIndex = state.products.findIndex((p) => p.id === item.id);
  
        if (existingProductIndex !== -1) {
          // If the product is already in the cart, update its quantity
          state.products[existingProductIndex].quantity += quantity;
        } else {
          // If the product is not in the cart, add it with the given quantity.
          state.products.push({ ...item, quantity });
        }
      },
    increaseQuantity(state, action) {
      const item = state.products.find((p) => p.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity(state, action) {
      const item = state.products.find((p) => p.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    deleteItem(state, action) {
      state.products = state.products.filter((p) => p.id !== action.payload);
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
