import Intro from "components/Intro/Intro";
import HeaderMenu from "../../components/Menu/Header/HeaderMenu";
import "./Header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="header-icon">
        <div className="header-link">
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            메인 화면 이동 아이콘
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
