import { axiosClient } from "../../../config/axios";

export const getAllProductsApi = async (payload) => {
  const res = await axiosClient.get("/products/getAllProducts", {
    params: {
      ...payload,
    },
  });
  return res.data;
};
export const addProductApi = async (payload) => {
  const res = await axiosClient.post("products/create", payload);
  return res.data;
};

export const editProductApi = async ({ id, ...payload }) => {
  const res = await axiosClient.put(`products/updateProduct/${id}`, payload);
  return res.data;
};
export const getSingleProductApi = async (payload) => {
  const res = await axiosClient.get(`products/getSingleProduct/${payload}`);
  return res.data;
};

export const deleteProductApi = async (id) => {
  const res = await axiosClient.delete(`/products/deleteSingleProduct/${id}`);
  return res.data;
};
