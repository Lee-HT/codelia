import CommentDetail from "components/Comment/CommentDetail/CommentDetail";
import Setting from "components/Menu/Setting/Setting";
import PostCategory from "components/Post/Detail/Category/PostCategory";
import PostContents from "components/Post/Detail/Contents/PostContents";
import PostTitle from "components/Post/Detail/Title/PostTitle";
import UserProfile from "components/User/Profile/UserProfile";
import ProfileImg from "components/User/ProfileImg/ProfileImg";
import usePostGet from "hooks/Post/PostGet/usePostGet";
import useUserGet from "hooks/User/UserGet/useUserGet";
import { useCallback, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import PostLikes from "./Likes/PostLikes";
import "./PostDetail.css";

export default function PostDetail() {
  const { post, getPost } = usePostGet();
  const { user, getUser } = useUserGet();
  const uid = useRef();
  const params = useParams();

  const loadApi = useCallback(async () => {
    await getPost(uid, params.pid);
    await getUser(uid.current);
  }, [getPost, getUser, params.pid]);

  useEffect(() => {
    loadApi();
  }, [loadApi]);

  return (
    <div className="post-wrap">
      <div className="title-area">
        <div className="category">
          <PostCategory category={post.category} />
        </div>
        <div className="title">
          <PostTitle title={post.title} />
        </div>
        <div className="profile">
          <ProfileImg imgLink={user.profilePic} />
        </div>
        <div className="username">
          <UserProfile username={user.username} />
        </div>
        <div className="setting">
          <div className="setting-icon">
            <Setting pid={params.pid} />
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
