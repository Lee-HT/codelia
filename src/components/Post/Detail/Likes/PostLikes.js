import usePostLike from "hooks/Post/PostLike/usePostLike";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import "./PostLikes.css";
import { LoginContext } from "contexts/Login/LoginContext";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4px;
  border: 0;
  border-radius: 3px;
  height: 32px;
  background-color: ${(props) => props.color};
`;

export default function PostLikes(props) {
  const { userInfo } = useContext(LoginContext);
  const { likeState, likeCount, getPostLike, getPostLikeCount, handleLikes } =
    usePostLike(props.pid);

  useEffect(() => {
    if (userInfo.isLogin) {
      getPostLike();
    }
    getPostLikeCount();
  }, [userInfo.isLogin, getPostLike, getPostLikeCount]);

  return (
    <div className="post__likes">
      <Button
        color={likeState === false ? "rgba(255, 0, 0, 0.5)" : "white"}
        onClick={() => handleLikes(false)}
      >
        <img
          title="싫어요 이미지"
          alt="싫어요 이미지"
          src={process.env.PUBLIC_URL + "/Assets/MenuIcon/Hate.png"}
        />
      </Button>
      <Button
        color={likeState === true ? "lawngreen" : "white"}
        onClick={() => handleLikes(true)}
      >
        <img
          title="좋아요 이미지"
          alt="좋아요 이미지"
          src={process.env.PUBLIC_URL + "/Assets/MenuIcon/Like.png"}
        />
        {likeCount !== 0 ? <div className="count-area">{likeCount}</div> : null}
      </Button>
    </div>
  );
}
