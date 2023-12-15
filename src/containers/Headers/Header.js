import Intro from "components/Intro/Intro";
import HeaderMenu from "../../components/Menu/Header/HeaderMenu";
import "./Header.css";

export default function Header() {
  return (
    <header className="row header">
      <div className="col-6 d-flex justify-content-start header__icon">
        <a href="/" className="link-mainview">
          메인 화면 이동 아이콘
        </a>
      </div>
      <div className="col-6 d-flex justify-content-end header-menu">
        <HeaderMenu />
      </div>
      <div className="col intro-image">
        <Intro />
      </div>
    </header>
  );
}
