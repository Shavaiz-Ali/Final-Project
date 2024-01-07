import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteUserApi, getAllUsersApi } from "./api";
import { toast } from "react-toastify";

export const getAllUsers = createAsyncThunk(
  "allUsers/getAllUsers",
  async () => {
    const resultPromise = new Promise((resolve, reject) => {
      getAllUsersApi()
        .then((data) => {
          resolve(data);
          return data;
        })
        .catch(({ response }) => {
          reject(response.data?.error || "Something went wrong");
        });
    });

    return await resultPromise;
  }
);
export const deleteUser = createAsyncThunk(
  "allUsers/deleteUser",
  async (payload) => {
    const resultPromise = new Promise((resolve, reject) => {
      deleteUserApi(payload)
        .then((data) => {
          resolve(data);
          return data;
        })
        .catch(({ response }) => {
          reject(response.data?.error || "Something went wrong");
        });
    });
    toast.promise(resultPromise, {
      loading: "Deleting User",
      success: "User Deleted",
      error: (err) => err,
    });
    return await resultPromise;
  }
);
