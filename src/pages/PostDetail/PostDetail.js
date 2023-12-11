import { api } from "API";
import PostContents from "components/Post/Detail/Contents/PostContents";
import PostTitle from "components/Post/Detail/Title/PostTitle";
import PostCategory from "components/Post/Simple/Category/PostCategory";
import UserProfile from "components/User/Profile/UserIcon";
import CommentDetail from "pages/CommentDetail/CommentDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PostDetail.css";

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
      <div className="post-category">
        <PostCategory category={post.category} />
      </div>
      <div className="post-user-profile">
        <UserProfile username={post.username} />
      </div>
      <div className="post-title">
        <PostTitle title={post.title} />
      </div>
      <div className="post-contents">
        <PostContents contents={post.contents} />
      </div>

      <div className="post__comments">
        <CommentDetail pid={params.pid} />
      </div>
    </div>
  );
}
