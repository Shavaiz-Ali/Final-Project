import { axiosClient } from "../../../config/axios";

export const getAllUsersApi = async () => {
  const authToken = localStorage.getItem("accessToken");
  const res = await axiosClient.get("/user/getAllUsers", {
    headers: {
      Authorization: `Bearer ${authToken} `,
    },
  });
  return res.data;
};

export const deleteUserApi = async (id) => {
  const authToken = localStorage.getItem("accessToken");
  const res = await axiosClient.delete(`/user/deleteSingleUser/${id}`, {
    headers: {
      Authorization: `Bearer ${authToken} `,
    },
  });
  return res.data;
};
