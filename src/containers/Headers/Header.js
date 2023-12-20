import Intro from "components/Intro/Intro";
import HeaderMenu from "../../components/Menu/Header/HeaderMenu";
import "./Header.css";

export default function Header() {
  return (
    <header className="row header">
      <div className="col-6 header-icon">
        <div className="header-link">
          <a href="/" className="header-link-icon">
            메인 화면 이동 아이콘
          </a>
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
