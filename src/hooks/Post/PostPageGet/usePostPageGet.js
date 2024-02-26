import { api } from "API";
import { useCallback, useState } from "react";

export default function usePostPageGet(setTotalPage) {
  const [posts, setPosts] = useState([]);

  const getPostPage = useCallback(async (params) => {
    try {
      const response = await api.get("post", { params });
      if (response.status === 200) {
        const { data } = response;
        console.log(data);
        setPosts(data);
        setTotalPage(data.totalPages);
      }
    } catch (error) {
      console.log(error);
    }
  }, [setTotalPage]);

  const getPostCategory = useCallback(async (params,category) => {
    try {
      const response = await api.get("post/category/" + category, {params});
      if (response.status === 200) {
        const { data } = response;
        console.log(data);
        setPosts(data);
        setTotalPage(data.totalPages);
      }
    } catch (error) {
      console.log(error);
    }
  }, [setTotalPage]);

  return { posts, getPostPage, getPostCategory };
}
