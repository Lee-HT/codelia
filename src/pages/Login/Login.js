import { LoginContext } from "contexts/Login/LoginContext";
import { useContext, useEffect } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { userInfo } = useContext(LoginContext);
  const navigate = useNavigate();

  const providers = ["google", "naver"];

  return (
    <div className="login-container">
      {userInfo.isLogin ? (
        navigate("/")
      ) : (
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
      )}
    </div>
  );
}
