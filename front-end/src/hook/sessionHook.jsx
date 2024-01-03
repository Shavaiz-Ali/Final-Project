import { useLayoutEffect } from "react";
import { useAuthContext } from "../context/authContext";
import axios from "axios";

const SessionHook = () => {
  const accessToken = localStorage.getItem("accessToken");
  const { AuthData } = useAuthContext();
  const checkSession = async () => {
    if (accessToken) {
      const { data } = await axios.get("http://localhost:9000/user/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (data) {
        AuthData(data.data);
      }
    }
  };
  useLayoutEffect(() => {
    checkSession();
  }, []);
  return null;
};

export default SessionHook;
