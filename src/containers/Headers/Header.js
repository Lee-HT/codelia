import "./Header.css";
import HeaderMenu from "../../components/Menu/Headers/HeaderMenu";

function Header(props) {
  return (
    <header className="row col header">
      <div className="col-6 d-flex justify-content-start header__icon">
        <a href="/" className="link-mainview">
          메인 화면 이동 아이콘
        </a>
      </div>
      <div className="col-6 d-flex justify-content-end menu">
        <HeaderMenu />
      </div>
    </header>
  );
}

export default Header;
