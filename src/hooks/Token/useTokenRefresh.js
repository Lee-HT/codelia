import { api } from "API";
import { LoginContext } from "contexts/Login/LoginContext";
import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function useTokenRefresh() {
  const { setUserInfo } = useContext(LoginContext);
  const navigate = useNavigate();

  const getUserInfo = useCallback(async () => {
    try {
      const response = await api.get("/oauth2/userinfo", {
        headers: { Authorization: sessionStorage.getItem("accessToken") },
      });
      const { data } = response;
      if (response.status === 200) {
        console.log(data);
        setUserInfo("isLogin", true);
        setUserInfo("username", data.username);
        setUserInfo("uid", data.uid);
        setUserInfo("email", data.email);
        setUserInfo("profileImg", data.profilePic);
      } else if (response.status === 401 || response.status === 403) {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  }, [setUserInfo]);

  const tokenRefresh = useCallback(async () => {
    try {
      const response = await api.post("/oauth2/token");
      if (response.status === 201) {
        sessionStorage.setItem("accessToken", response.headers.authorization);
        console.log(response);
        getUserInfo();
      } else if (response.status === 401 || response.status === 403) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  }, [getUserInfo, navigate]);
  return { getUserInfo, tokenRefresh };
}
