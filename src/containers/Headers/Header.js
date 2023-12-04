import "./Header.css";
import HeaderMenu from "../../components/Menu/Header/HeaderMenu";
import Intro from "components/Intro/Intro";

export default function Header(props) {
  return (
    <header className="row header">
      <div className="col-6 d-flex justify-content-start header__icon">
        <a href="/" className="link-mainview">
          메인 화면 이동 아이콘
        </a>
      </div>
      <div className="col-6 d-flex justify-content-end menu">
        <HeaderMenu />
      </div>
      <div className="col intro">
        <Intro />
      </div>
    </header>
  );
}
