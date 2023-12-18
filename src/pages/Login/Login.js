import { LoginContext } from "contexts/Login/LoginContext";
import { useContext, useEffect } from "react";
import "./Login.css";

export default function Login() {
  const { userInfo, setUserContext } = useContext(LoginContext);

  useEffect(() => {
    setUserContext("isLogin", true);
  }, [setUserContext]);

  return (
    <div>
      <div>{userInfo.username}</div>
      <div>{"isLogin : " + userInfo.isLogin}</div>
    </div>
  );
}
