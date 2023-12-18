import { createContext, useCallback, useState } from "react";

export const TokenContext = createContext();

export default function TokenProvider({ children }) {
  const [tokens, setToken] = useState({
    accessToken: "",
    refreshToken: "",
  });

  const setTokens = useCallback(
    (key, value) => {
      setToken((prev) => ({ ...prev, [key]: value }));
    },
    [setToken]
  );

  return (
    <TokenContext.Provider value={{ tokens, setTokens }}>
      {children}
    </TokenContext.Provider>
  );
}
