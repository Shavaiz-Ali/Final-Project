import React, { createContext, useContext, useState } from "react";
const AuthContext = createContext({
  AuthData: () => null,
  isAuth: [],
  userInfo: [],
});
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const AuthData = (data) => {
    setIsAuth(true);
    setUserInfo(data);
  };
  return (
    <AuthContext.Provider value={{ userInfo, isAuth, AuthData }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => useContext(AuthContext);
