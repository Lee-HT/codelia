import { useCallback } from "react";

export default function useLogout(resetUserInfo) {
  const LogoutApi = useCallback(() => {
    window.location.replace(process.env.REACT_APP_API + "/api/logout");
  }, []);

  const Logout = useCallback(() => {
    sessionStorage.removeItem("accessToken");
    resetUserInfo();
    LogoutApi();
  }, [resetUserInfo, LogoutApi]);

  return Logout;
}
