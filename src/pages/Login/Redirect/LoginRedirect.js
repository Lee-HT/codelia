import { api } from "API";
import { LoginContext } from "contexts/Login/LoginContext";
import { useCallback, useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function LoginRedirect() {
  const [params] = useSearchParams();
  const { setUserInfo } = useContext(LoginContext);
  const navigate = useNavigate();

  const GetUserInfo = useCallback(async () => {
    try {
      const response = await api.get("/oauth2/userinfo");
      const { data } = response;
      if (response.status === 200) {
        console.log(data);
        setUserInfo("isLogin", true);
        setUserInfo("username", data.username);
        setUserInfo("uid", data.uid);
        setUserInfo("email", data.email);
        setUserInfo("profileImg",data.profilePic);
      }
    } catch (error) {
      console.log(error);
    }
  }, [setUserInfo]);

  useEffect(() => {
    sessionStorage.setItem("accessToken", params.get("authorization"));
    GetUserInfo();
    navigate("/");

    // 방문 히스토리 저장 X
    // window.location.replace("/");
  }, [params, navigate, GetUserInfo]);

  return <div></div>;
}
