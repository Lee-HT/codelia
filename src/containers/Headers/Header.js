import Intro from "components/Intro/Intro";
import useTokenRefresh from "hooks/Token/useTokenRefresh";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderMenu from "../../components/Menu/Header/HeaderMenu";
import "./Header.css";

export default function Header() {
  const { getUserInfo, tokenRefresh } = useTokenRefresh();
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("accessToken") !== null) {
      getUserInfo();
    } else {
      tokenRefresh();
    }
  }, [getUserInfo, tokenRefresh]);

  return (
    <header className="header">
      <div className="header-icon">
        <div className="header-link">
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Home Page
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
