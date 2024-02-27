import { api } from "API";
import { useCallback, useState } from "react";

export default function usePostsByUserGet() {
  const [posts, getPosts] = useState([]);
  const getPostPage = useCallback((uid) => {
    const response = api.get("post/uid/" + uid, params);
    if (response.status === 200) {
      const { data } = response;
      getPosts(data.contents);
    }
  });
  return { posts, getPostPage };
}
