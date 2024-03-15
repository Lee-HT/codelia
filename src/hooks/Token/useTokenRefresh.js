import { api } from "API";
import { LoginContext } from "contexts/Login/LoginContext";
import { useCallback, useContext } from "react";

export default function useTokenRefresh() {
  const { setUserInfo } = useContext(LoginContext);

  const getUserInfo = useCallback(async () => {
    try {
      const response = await api.get("/oauth2/userinfo", {
        headers: { Authorization: sessionStorage.getItem("accessToken") },
      });
      const { data } = response;
      if (response.status === 200) {
        setUserInfo("isLogin", true);
        setUserInfo("username", data.username);
        setUserInfo("uid", data.uid);
        setUserInfo("email", data.email);
        setUserInfo("profileImg", data.profilePic);
      }
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 403) {
        setUserInfo("isLogin", false);
      }
    }
  }, [setUserInfo]);

  const tokenRefresh = useCallback(async () => {
    try {
      const response = await api.post("/oauth2/token");
      if (response.status === 201) {
        sessionStorage.setItem("accessToken", response.headers.authorization);
        getUserInfo();
      }
    } catch (error) {
      if (
        error.response && (error.response.status === 401 ||
        error.response.status === 403)
      ) {
        setUserInfo("isLogin", false);
      }
    }
  }, [getUserInfo, setUserInfo]);
  return { getUserInfo, tokenRefresh };
}
