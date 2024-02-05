import { api } from "API";
import CommentDetail from "components/Comment/CommentDetail/CommentDetail";
import PostCategory from "components/Post/Detail/Category/PostCategory";
import PostContents from "components/Post/Detail/Contents/PostContents";
import PostTitle from "components/Post/Detail/Title/PostTitle";
import UserProfile from "components/User/Profile/UserProfile";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostLikes from "./Likes/PostLikes";
import "./PostDetail.css";
import ProfileImg from "components/User/ProfileImg/ProfileImg";
import { LoginContext } from "contexts/Login/LoginContext";
import Setting from "components/Menu/Setting/Setting";

export default function PostDetail() {
  const { userInfo } = useContext(LoginContext);
  const [post, setPost] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function getPost() {
      try {
        const response = await api.get("post/" + params.pid);
        const { data } = response;
        console.log(data);
        setPost(data);
      } catch (error) {
        console.log(error);
      }
    }
    getPost();
  }, [params.pid]);

  return (
    <div className="post-wrap">
      <div className="title-area">
        <div className="category">
          <PostCategory category={post.category} />
        </div>
        <div className="title">
          <PostTitle title={post.title} />
        </div>
        <div className="profile-img">
          <ProfileImg imgLink={userInfo.profileImg} />
        </div>
        <div className="username">
          <UserProfile username={post.username} />
        </div>
        <div className="setting">
          <div className="setting-icon">
            <Setting pid={params.pid}/>
          </div>
        </div>
      </div>
      <div className="contents-area">
        <PostContents contents={post.contents} />
      </div>

      <div className="post__likes">
        <PostLikes pid={params.pid} />
      </div>
      <div className="comments">
        <CommentDetail pid={params.pid} />
      </div>
    </div>
  );
}
