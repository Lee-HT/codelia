import { createContext, useCallback, useState } from "react";

export const LoginContext = createContext();

export default function LoginProvider({ children }) {
  const [userInfo, setUser] = useState({
    isLogin: false,
    username: "",
    uid: null,
    email: "",
    profilePic: "",
  });

  const setUserInfo = useCallback(
    (key, value) => {
      setUser((prev) => ({ ...prev, [key]: value }));
    },
    [setUser]
  );

  return (
    <LoginContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </LoginContext.Provider>
  );
}
