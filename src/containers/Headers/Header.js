import Intro from "components/Intro/Intro";
import { useNavigate } from "react-router-dom";
import HeaderMenu from "../../components/Menu/Header/HeaderMenu";
import "./Header.css";
import useTokenRefresh from "hooks/Token/useTokenRefresh";
import { useContext, useEffect } from "react";
import { LoginContext } from "contexts/Login/LoginContext";

export default function Header() {
  const { getUserInfo } = useTokenRefresh();
  const { setUserInfo } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("header useEffect");
    if (sessionStorage.getItem("accessToken") !== null) {
      getUserInfo();
    } else {
      setUserInfo("isLogin",false);
    }
  }, [getUserInfo, setUserInfo]);
  return (
    <header className="header">
      <div className="header-icon">
        <div className="header-link">
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            메인 화면 이동
          </button>
        </div>
      </div>
      <div className="header-menu">
        <HeaderMenu />
      </div>
      <div className="intro-img">
        <Intro />
      </div>
    </header>
  );
}
