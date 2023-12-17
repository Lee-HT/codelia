import { createContext, useCallback, useState } from "react";

export const LoginContext = createContext();
LoginContext.displayName = "LIA";

export function LoginProvider({ children }) {
  const [userInfo, setUser] = useState({
    isLogin: false,
    username: "LIA"
  });

  const setUserContext = useCallback(
    (key,value) => {
      setUser((prev) => ({ ...prev, [key]: value }));
    },
    [userInfo]
  );

  return (
    <LoginContext.Provider value={{ userInfo, setUserContext }}>
      {children}
    </LoginContext.Provider>
  );
}
