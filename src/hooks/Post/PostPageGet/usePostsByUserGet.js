import { api } from "API";
import { useCallback, useState } from "react";

export default function usePostsByUserGet(setTotalPage) {
  const [posts, setPosts] = useState([]);
  const [totalElements, setTotalElements] = useState(0);
  const getPostPage = useCallback(
    async (params, uid) => {
      try {
        const response = await api.get("post/uid/" + uid, params);
        if (response.status === 200) {
          const { data } = response;
          setPosts(data.contents);
          setTotalPage(data.totalPages);
          setTotalElements(data.totalElements);
        }
      } catch (error) {
        console.log(error);
      }
    },
    [setTotalPage]
  );
  return { posts, getPostPage, totalElements };
}
