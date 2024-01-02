import { api } from "API";
import "./PostLikes.css";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  margin: 4px auto;
  border: 0;
  border-radius: 3px;
  height: 32px;
`;

export default function PostLikes(props) {
  const [likeState, setLikeState] = useState(null);
  useEffect(() => {
    async function PostLikesState() {
      try {
        const response = await api.post("/");
        const { data } = response;
        console.log(data);
        setLikeState("");
      } catch (error) {
        console.log(error);
      }
    }
    PostLikesState();
  }, [setLikeState]);

  return (
    <div className="post__likes">
      <Button>{likeState ? "싫어요 x" : "싫어요 o"}</Button>
      <Button>{likeState ? "좋아요 o" : "좋아요 x"}</Button>
    </div>
  );
}
