import { api } from "API";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function useLogout(resetUserInfo) {
  const navigate = useNavigate();
  const LogoutApi = useCallback(async () => {
    try {
      const response = await api.post("oauth2/logout");
      if (response.status === 200) {
        console.log(response);
        resetUserInfo();

        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }, [navigate,resetUserInfo]);

  const Logout = useCallback(() => {
    sessionStorage.removeItem("accessToken");
    LogoutApi();
  }, [LogoutApi]);

  return Logout;
}
