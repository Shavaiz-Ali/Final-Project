import { getAllProducts, getSingleProduct } from "./product.action";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isProductFetching: false,
  isProductFetched: false,
  isProductFailedToFetched: false,
  allProducts: [],

  isSingleProductFetching: false,
  isSingleProductFetched: false,
  isSingleProductFailedToFetched: false,
  singleProduct: [],
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
    //
    builder.addCase(getSingleProduct.pending, (state) => {
      state.isSingleProductFetched = false;
      state.isSingleProductFailedToFetched = false;
      state.isSingleProductFetching = true;
    });
    builder.addCase(getSingleProduct.fulfilled, (state, action) => {
      state.isSingleProductFetched = true;
      state.isSingleProductFailedToFetched = false;
      state.isSingleProductFetching = false;
      state.singleProduct = action.payload;
    });
    builder.addCase(getSingleProduct.rejected, (state) => {
      state.isSingleProductFetched = false;
      state.isSingleProductFailedToFetched = true;
      state.isSingleProductFetching = false;
    });
  },
});

export default getAllProductsSlicer.reducer;
