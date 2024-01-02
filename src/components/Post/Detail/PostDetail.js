import { api } from "API";
import PostContents from "components/Post/Detail/Contents/PostContents";
import PostTitle from "components/Post/Detail/Title/PostTitle";
import PostCategory from "components/Post/Detail/Category/PostCategory";
import UserProfile from "components/User/Profile/UserProfile";
import CommentDetail from "components/Comment/CommentDetail/CommentDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PostDetail.css";
import PostLikes from "./Likes/PostLikes";

export default function PostDetail() {
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
    <div className="row post-view">
      <div className="col-12 post-category">
        <PostCategory category={post.category} />
      </div>
      <div className="col-12 post-user-profile">
        <UserProfile username={post.username} />
      </div>
      <div className="col-12 post-title">
        <PostTitle title={post.title} />
      </div>
      <div className="col-12 post-contents">
        <PostContents contents={post.contents} />
      </div>

      <div className="col-12 post__likes">
        <PostLikes pid={params.pid}/>
      </div>
      <div className="col-12 post__comments">
        <CommentDetail pid={params.pid} />
      </div>
    </div>
  );
}
