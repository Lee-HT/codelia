import "./Body.css";
import MainMenu from "components/Menu/Main/MainMenu";
import SubMenu from "components/Menu/Sub/SubMenu";
import Preview from "pages/preview/Preview";

function Body(props) {
  return (
    <div className="row body">
      <div className="col-2 menu__main">
        <MainMenu />
      </div>
      <div className="col-8 d-flex justify-content-center view">
        <Preview />
      </div>
      <div className="col-2 menu__main">
        <SubMenu />
      </div>
    </div>
  );
}

export default Body;
