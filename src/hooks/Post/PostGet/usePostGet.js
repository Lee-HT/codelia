import { api } from "API";
import { useCallback, useState } from "react";

export default function usePostGet() {
  const [post, setPost] = useState([]);

  const getPost = useCallback(async (uid,pid) => {
    try {
      const response = await api.get("post/" + pid);
      if (response.status === 200) {
        const { data } = response;
        console.log(data);
        setPost(data);
        uid.current = data.uid;
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  return { post, getPost };
}
