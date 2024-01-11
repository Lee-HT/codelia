import { useCallback } from "react";

export default function useLogout(setUserInfo) {
  const LogoutApi = useCallback(() => {
    window.location.replace(process.env.REACT_APP_API + "/api/logout");
  }, []);

  const Logout = useCallback(() => {
    sessionStorage.removeItem("accessToken");
    setUserInfo("isLogin", false);
    setUserInfo("uid", null);
    LogoutApi();
  }, [setUserInfo, LogoutApi]);

  return Logout;
}
