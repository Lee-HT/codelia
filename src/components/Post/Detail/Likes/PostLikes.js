import { api } from "API";
import { useCallback, useEffect, useState } from "react";
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
  const [likeState, setLikeState] = useState(null);

  const handleLikes = useCallback(
    (likes) => {
      async function putApi(likes) {
        try {
          const params = { pid: props.pid, likes: likes };
          const response = await api.put("/post/likes", params);
          if (response.status === 201) {
            const { data } = response;
            console.log(data);
            setLikeState(data.likes);
          }
        } catch (error) {
          console.log(error);
        }
      }
      async function deleteApi() {
        try {
          const response = await api.delete("/post/" + props.pid + "/likes");
          if (response.status === 204) {
            const { data } = response;
            console.log(data);
            setLikeState(null);
          }
        } catch (error) {
          console.log(error);
        }
      }

      if (likeState == null || likeState !== likes) {
        putApi(likes);
      } else {
        deleteApi();
      }
    },
    [props.pid, likeState]
  );

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
  }, [props.pid]);

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
