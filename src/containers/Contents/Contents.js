import MainMenu from "components/Menu/Main/MainMenu";
import SubMenu from "components/Menu/Sub/SubMenu";
import PostDetail from "components/Post/Detail/PostDetail";
import NotFound from "pages/Error/404error/NotFound";
import Login from "pages/Login/Login";
import PostSave from "pages/Post/Save/PostSave";
import Postview from "pages/Post/View/Postview";
import Preview from "pages/Preview/Preview";
import WritePosts from "pages/User/WritePosts/WritePosts";
import { Route, Routes } from "react-router-dom";
import "./Contents.css";

export default function Contents() {
  return (
    <div className="contents-area">
      <div className="group-area">
        <MainMenu />
      </div>
      <div className="main-area">
        <Routes>
          <Route path="/" element={<Preview />}></Route>
          <Route path="/post/save" element={<PostSave />}></Route>
          <Route path="/post/:pid" element={<PostDetail />}></Route>
          <Route path="/post/user" element={<WritePosts />}></Route>
          <Route path="/post" element={<Postview />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <div className="sub-area">
        <SubMenu />
      </div>
    </div>
  );
}
