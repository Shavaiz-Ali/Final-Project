import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "./users.action";

const initialState = {
  isUserFetching: false,
  isUserFetched: false,
  isUserFailedToFetched: false,
  allUsers: [],
};

const getAllUsersSlicer = createSlice({
  name: "getAllUsers",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, (state) => {
      state.isUserFetching = true;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      console.log(action.payload, "payload");
      state.isUserFetching = false;
      state.isUserFetched = true;
      state.allUsers = action.payload;
    });
    builder.addCase(getAllUsers.rejected, (state) => {
      state.isUserFetching = false;
      state.isUserFetched = false;
      state.isUserFailedToFetched = true;
    });
  },
});

export default getAllUsersSlicer.reducer;
