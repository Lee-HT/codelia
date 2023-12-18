import { LoginContext } from "contexts/Login/LoginContext";
import { useContext, useEffect } from "react";
import "./Login.css";

export default function Login() {
  const { userInfo, setUserInfo } = useContext(LoginContext);

  useEffect(() => {
    setUserInfo("isLogin", true);
  }, [setUserInfo]);

  return (
    <div>
      <div>{userInfo.username}</div>
      <div>{"isLogin : " + userInfo.isLogin}</div>
    </div>
  );
}
