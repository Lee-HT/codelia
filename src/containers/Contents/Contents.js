import MainMenu from "components/Menu/Main/MainMenu";
import SubMenu from "components/Menu/Sub/SubMenu";
import NotFound from "pages/Error/404error/NotFound";
import PostDetail from "pages/Post/PostDetail/PostDetail";
import Preview from "pages/Preview/Preview";
import { Route, Routes } from "react-router-dom";
import "./Contents.css";

export default function Contents() {
  return (
    <div className="row contents-area">
      <div className="col-2 group-area">
        <MainMenu />
      </div>
      <div className="col-9 main-area">
        <Routes>
          <Route path="/" element={<Preview />}></Route>
          <Route path="/post"></Route>
          <Route path="/post/:pid" element={<PostDetail />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <div className="col-1 sub-area">
        <SubMenu />
      </div>
    </div>
  );
}
