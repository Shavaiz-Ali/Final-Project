import { axiosClient } from "../../../config/axios";

export const getAllProductsApi = async (payload) => {
  const res = await axiosClient.get("/products/getAllProducts", {
    params: {
      ...payload,
    },
  });
  return res.data;
};
