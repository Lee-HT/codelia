import { LoginContext } from "contexts/Login/LoginContext";
import { useContext, useEffect } from "react";
import "./Login.css";

export default function Login() {
  const { userInfo, setUserInfo } = useContext(LoginContext);

  useEffect(() => {});

  const providers = ["google", "naver"];

  return (
    <div className="login-container">
      <div className="login-area">
          {providers?.map((provider) => {
            return (
                <a
                  title={provider + " 로그인"}
                  href={
                    process.env.REACT_APP_HOST +
                    "/api/oauth2/authorization/" +
                    provider
                  }
                >
                  {provider} 로그인
                </a>
            );
          })}
      </div>
    </div>
  );
}
