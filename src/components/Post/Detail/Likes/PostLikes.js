import { api } from "API";
import usePostLike from "hooks/PostLike/usePostLike";
import { useEffect } from "react";
import styled from "styled-components";
import "./PostLikes.css";

const Button = styled.button`
  margin: 4px;
  border: 0;
  border-radius: 3px;
  height: 32px;
  background-color: ${(props) => props.color};
`;

export default function PostLikes(props) {
  const { likeState, setLikeState, handleLikes } = usePostLike(props.pid);

  useEffect(() => {
    async function PostLikesState() {
      try {
        const response = await api.get("/post/" + props.pid + "/likes");
        if (response.status === 200) {
          const { data } = response;
          console.log(data);
          setLikeState(data.likes);
        }
      } catch (error) {
        console.log(error);
      }
    }
    PostLikesState();
  }, [props.pid, setLikeState]);

  return (
    <div className="post__likes">
      <Button
        color={likeState === false ? "rgba(255, 0, 0, 0.5)" : "white"}
        onClick={() => handleLikes(false)}
      >
        싫어요
      </Button>
      <Button
        color={likeState === true ? "lawngreen" : "white"}
        onClick={() => handleLikes(true)}
      >
        좋아요
      </Button>
    </div>
  );
}
