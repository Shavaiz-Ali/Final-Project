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
            console.log(item._id);
            const existingItem = state.products.find((cartItem) => cartItem._id === item._id);
      
            if (existingItem) {
              // If item already exists in the cart, update its quantity
              existingItem.quantity += quantity;
            } else {
              // If item does not exist, add it to the cart
              state.products.push({ ...item, quantity });
            }
          },
          increaseQuantity(state, action) {
            const { _id } = action.payload;
            console.log(_id)
            const item = state.products.find((item) => item._id === _id);
            console.log(item);
            
            if (item) {
              item.quantity += 1;
            }
          },       
        decreaseQuantity(state, action) {
            const item = state.products.find(
                (item) => item.id === action.payload
            );
            if (item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity--;
            }
        },
        deleteItem(state, action) {
            state.products = state.products.filter(
                (item) => item._id !== action.payload
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