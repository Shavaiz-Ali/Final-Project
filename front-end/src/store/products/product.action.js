import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addProductApi,
  deleteProductApi,
  editProductApi,
  getAllProductsApi,
  getSingleProductApi,
} from "./api";
import { toast } from "react-toastify";

export const getAllProducts = createAsyncThunk(
  "allProducts/getAllProducts",
  async (payload) => {
    const resultPromise = new Promise((resolve, reject) => {
      getAllProductsApi(payload)
        .then(({ data }) => {
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

export const addProduct = createAsyncThunk("product/add", async (payload) => {
  const resultPromise = new Promise((resolve, reject) => {
    addProductApi(payload)
      .then((data) => {
        resolve(data);
        return data;
      })
      .catch(({ response }) => {
        reject(response.data?.error || "Something went wrong");
      });
  });
  toast.promise(resultPromise, {
    loading: "Adding Product",
    success: "Product added",
    error: (err) => err,
  });
  return await resultPromise;
});

export const editProduct = createAsyncThunk("product/edit", async (payload) => {
  const resultPromise = new Promise((resolve, reject) => {
    editProductApi(payload)
      .then((data) => {
        resolve(data);
        return data;
      })
      .catch(({ response }) => {
        reject(response.data?.error || "Something went wrong");
      });
  });
  toast.promise(resultPromise, {
    loading: "Editting Product",
    success: "Product Editted",
    error: (err) => err,
  });
  return await resultPromise;
});

export const getSingleProduct = createAsyncThunk(
  "product/getSingle",
  async (payload) => {
    const resultPromise = new Promise((resolve, reject) => {
      getSingleProductApi(payload)
        .then(({ data }) => {
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

export const deleteProduct = createAsyncThunk(
  "allProduct/deleteProduct",
  async (payload) => {
    const resultPromise = new Promise((resolve, reject) => {
      deleteProductApi(payload)
        .then((data) => {
          resolve(data);
          return data;
        })
        .catch(({ response }) => {
          reject(response.data?.error || "Something went wrong");
        });
    });
    toast.promise(resultPromise, {
      loading: "Deleting Product",
      success: "User Product",
      error: (err) => err,
    });
    return await resultPromise;
  }
);
