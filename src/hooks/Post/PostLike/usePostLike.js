import { api } from "API";
import { useCallback, useState } from "react";

export default function usePostLike(pid) {
  const [likeState, setLikeState] = useState(null);
  const [likeCount, setLikeCount] = useState(null);

  const getPostLikeCount = useCallback(async () => {
    try {
      const response = await api.get("/post/" + pid + "/likes/true/count");
      if (response.status === 200) {
        const { data } = response;
        setLikeCount(data);
      }
    } catch (error) {
      console.log(error);
    }
  }, [pid]);

  const getPostLike = useCallback(async () => {
    try {
      const response = await api.get("/post/" + pid + "/likes");
      if (response.status === 200) {
        const { data } = response;
        setLikeState(data.likes);
      }
    } catch (error) {
      console.log(error);
    }
  }, [pid]);

  const putApi = useCallback(
    async (likes) => {
      try {
        const params = { pid: pid, likes: likes };
        const response = await api.put("/post/likes", params);
        if (response.status === 201 || response.status === 204) {
          setLikeState(likes);
        }
      } catch (error) {
        console.log(error);
      }
    },
    [pid]
  );

  const deleteApi = useCallback(async () => {
    try {
      const response = await api.delete("/post/" + pid + "/likes");
      if (response.status === 204) {
        setLikeState(null);
      }
    } catch (error) {
      console.log(error);
    }
  }, [pid]);

  const handleLikes = useCallback(
    async (likes) => {
      if (likeState == null || likeState !== likes) {
        await putApi(likes);
      } else {
        await deleteApi();
      }
      await getPostLikeCount();
    },
    [likeState, getPostLikeCount, putApi, deleteApi]
  );

  return { likeState, likeCount, getPostLike, getPostLikeCount, handleLikes };
}
