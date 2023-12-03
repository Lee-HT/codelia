import "./Body.css";
import MainMenu from "components/Menu/Main/MainMenu";
import SubMenu from "components/Menu/Sub/SubMenu";
import Preview from "pages/Preview/Preview";

function Body(props) {
  return (
    <div className="row body">
      <div className="col-2 menu__main">
        <MainMenu />
      </div>
      <div className="col-9 view">
        <Preview />
      </div>
      <div className="col-1 menu__sub">
        <SubMenu />
      </div>
    </div>
  );
}

export default Body;
