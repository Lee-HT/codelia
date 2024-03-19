import useCommentLike from "hooks/Comment/CommentLike/useCommentLike";
import styled from "styled-components";
import "./LikeButton.css";
import { useEffect } from "react";

const Button = styled.button`
  background-color: ${(props) =>
    props.isLike ? "rgba(128, 196, 256, 0.4)" : "none"};
  height: 40%;
  border-radius: 3px;
  display: flex;
  justify-content: space-around;
`;

export default function LikeButton(props) {
  const { count, isLike, handleIsLike, getCommentLike } = useCommentLike(
    props.cid,
    props.uid
  );

  useEffect(() => {
    getCommentLike();
  }, [getCommentLike, props]);

  return (
    <div className="like-area">
      <Button isLike={isLike} size={props.size} onClick={handleIsLike}>
        <img
          className="like-img"
          src={process.env.PUBLIC_URL + "/Assets/MenuIcon/Like.png"}
          alt="Like Button"
          loading="lazy"
        ></img>
        {count !== 0 ? <div className="count-display">{count}</div> : null}
      </Button>
    </div>
  );
}
