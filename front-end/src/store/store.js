// store.js
import { configureStore } from "@reduxjs/toolkit";
import storeSlice from "./storeSlice"; // Import the storeSlice
import productSlicer from "./products/product.slicer";
import usersSlicer from "./users/users.slicer";
// import { unsplashApi} from './Unsplashapi'; // Import the unsplashApi from RTK-Query API slice

const store = configureStore({
  reducer: {
    users: storeSlice,
    getAllProductsSlicer: productSlicer,
    getAllUsers: usersSlicer,
  },
});
export default store;
