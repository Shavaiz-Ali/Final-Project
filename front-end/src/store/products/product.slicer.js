import { getAllProducts } from "./product.action";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isProductFetching: false,
  isProductFetched: false,
  isProductFailedToFetched: false,
  allProducts: [],
};

const getAllProductsSlicer = createSlice({
  name: "getAllProducts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.isProductFetching = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.isProductFetching = false;
      state.isProductFetched = true;
      state.allProducts = action.payload;
    });
    builder.addCase(getAllProducts.rejected, (state) => {
      state.isProductFetching = false;
      state.isProductFetched = false;
      state.isProductFailedToFetched = true;
    });
  },
});

export default getAllProductsSlicer.reducer;
