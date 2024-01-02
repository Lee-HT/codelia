import Intro from "components/Intro/Intro";
import HeaderMenu from "../../components/Menu/Header/HeaderMenu";
import "./Header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="row header">
      <div className="col-6 header-icon">
        <div className="header-link">
          <button onClick={() => {navigate("/")}}>
            메인 화면 이동 아이콘
          </button>
        </div>
      </div>
      <div className="col-6 header-menu">
        <HeaderMenu />
      </div>
      <div className="col intro-image">
        <Intro />
      </div>
    </header>
  );
}
