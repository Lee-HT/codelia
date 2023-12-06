import MainMenu from "components/Menu/Main/MainMenu";
import SubMenu from "components/Menu/Sub/SubMenu";
import NotFound from "pages/Error/404error/NotFound";
import PostDetail from "pages/PostDetail/PostDetail";
import Preview from "pages/Preview/Preview";
import { Route, Routes } from "react-router-dom";
import "./Body.css";

export default function Body(props) {
  return (
    <div className="row body">
      <div className="col-2 menu__main">
        <MainMenu />
      </div>
      <div className="col-9 view">
        <Routes>
          <Route path="/" element={<Preview />}></Route>
          <Route path="/post"></Route>
          <Route path="/post/:pid" element={<PostDetail />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <div className="col-1 menu__sub">
        <SubMenu />
      </div>
    </div>
  );
}
