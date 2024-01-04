import MainMenu from "components/Menu/Main/MainMenu";
import SubMenu from "components/Menu/Sub/SubMenu";
import NotFound from "pages/Error/404error/NotFound";
import Login from "pages/Login/Login";
import PostDetail from "components/Post/Detail/PostDetail";
import Preview from "pages/Preview/Preview";
import { Route, Routes } from "react-router-dom";
import "./Contents.css";
import Postview from "pages/Post/View/Postview";
import PostSave from "pages/Post/Save/PostSave";

export default function Contents() {
  return (
    <div className="row contents-area">
      <div className="col-2 group-area">
        <MainMenu />
      </div>
      <div className="col-9 main-area">
        <Routes>
          <Route path="/" element={<Preview />}></Route>
          <Route path="/post/save" element={<PostSave />}></Route>
          <Route path="/post/category/*" element={<Postview />}></Route>
          <Route path="/post/:pid" element={<PostDetail />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <div className="col-1 sub-area">
        <SubMenu />
      </div>
    </div>
  );
}
