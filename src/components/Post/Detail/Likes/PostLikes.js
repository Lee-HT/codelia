import usePostLike from "hooks/Post/PostLike/usePostLike";
import { useEffect } from "react";
import styled from "styled-components";
import "./PostLikes.css";

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
  const { likeState, likeCount, getPostLike, getPostLikeCount, handleLikes } =
    usePostLike(props.pid);

  useEffect(() => {
    getPostLike();
    getPostLikeCount();
  }, [getPostLike, getPostLikeCount]);

  return (
    <div className="post__likes">
      <Button
        color={likeState === false ? "rgba(255, 0, 0, 0.5)" : "white"}
        onClick={() => handleLikes(false)}
      >
        <img
          title="싫어요 이미지"
          alt="싫어요 이미지"
          src={process.env.PUBLIC_URL + "/Image/MenuIcon/Hate.png"}
        />
      </Button>
      <Button
        color={likeState === true ? "lawngreen" : "white"}
        onClick={() => handleLikes(true)}
      >
        <img
          title="좋아요 이미지"
          alt="좋아요 이미지"
          src={process.env.PUBLIC_URL + "/Image/MenuIcon/Like.png"}
        />
        {likeCount !== 0 ? <div className="count-area">{likeCount}</div> : null}
      </Button>
    </div>
  );
}
