import { api } from "API";
import { useCallback, useState } from "react";

export default function useCommentLike(cid, uid) {
  const [isLike, setIsLike] = useState(false);
  const [count, setCount] = useState(0);

  const getCommentLikeCount = useCallback(async () => {
    try {
      const response = await api.get("/comment/" + cid + "/likes/count");
      if (response.status === 200) {
        const { data } = response;
        setCount(data);
      }
    } catch (error) {
      console.log(error);
    }
  }, [cid]);

  const getCommentLike = useCallback(async () => {
    try {
      const response = await api.get(
        "/comment/" + cid + "/user/" + uid + "/likes"
      );
      if (response.status === 200) {
        const { data } = response;
        setIsLike(data.likes);
        getCommentLikeCount();
      }
    } catch (error) {
      console.log(error);
    }
  }, [cid, uid, getCommentLikeCount]);

  const postCommentLike = useCallback(async () => {
    try {
      const params = { cid: cid, likes: true };
      const response = await api.put("/comment/likes", params);
      if (response.status === 201) {
        setCount((count) => count + 1);
        setIsLike(true);
      }
    } catch (error) {
      console.log(error);
    }
  }, [cid]);

  const deleteCommentLike = useCallback(async () => {
    try {
      const response = await api.delete("/comment/" + cid + "/likes");
      if (response.status === 204) {
        setCount((count) => count - 1);
        setIsLike(false);
      }
    } catch (error) {
      console.log(error);
    }
  }, [cid]);

  const handleIsLike = useCallback(() => {
    if (isLike) {
      deleteCommentLike();
    } else {
      postCommentLike();
    }
  }, [isLike, deleteCommentLike, postCommentLike]);

  return { count, isLike, handleIsLike, getCommentLike };
}
