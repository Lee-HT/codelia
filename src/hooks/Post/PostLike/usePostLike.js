import { api } from "API";
import { useCallback, useState } from "react";

export default function usePostLike(pid) {
  const [likeState, setLikeState] = useState(null);

  const handleLikes = useCallback(
    (likes) => {
      async function putApi(likes) {
        try {
          const params = { pid: pid, likes: likes };
          const response = await api.put("/post/likes", params);
          if (response.status === 201) {
            const { data } = response;
            setLikeState(data.likes);
          }
        } catch (error) {
          console.log(error);
        }
      }
      async function deleteApi() {
        try {
          const response = await api.delete("/post/" + pid + "/likes");
          if (response.status === 204) {
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
    [pid, likeState]
  );

  return { likeState, setLikeState, handleLikes };
}
