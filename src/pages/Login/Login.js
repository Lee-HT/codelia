import { LoginContext } from "contexts/Login/LoginContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./Login.css";

const BrandImage = styled.img`
  width: 191px;
  height: 46px;
  object-fit: cover;
  background-color: rgba(255, 255, 255, 0.3);
`;

export default function Login() {
  const { userInfo } = useContext(LoginContext);
  const navigate = useNavigate();

  const providers = ["google", "naver"];

  return (
    <div className="login-container">
      {userInfo.isLogin ? (
        navigate("/", { replace: true })
      ) : (
        <div className="login-area">
          {providers?.map((provider) => {
            return (
              <div style={{ "margin-bottom": "10px" }}>
                <a
                  className=""
                  key={provider}
                  title={provider + " 로그인"}
                  href={
                    process.env.REACT_APP_API +
                    "/api/oauth2/authorization/" +
                    provider
                  }
                >
                  <BrandImage
                    title={provider}
                    alt={provider}
                    src={
                      process.env.PUBLIC_URL +
                      "/Assets/Login/" +
                      provider +
                      "-btn.png"
                    }
                  ></BrandImage>
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
