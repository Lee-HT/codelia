import { api } from "API";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function usePostDelete(pid) {
  const navigate = useNavigate();
  const handlePost = useCallback(async () => {
    try {
      const response = await api.delete("/post/" + pid);
      if (response.status === 204) {
        const { data } = response;
        console.log(data);
        navigate("/post/category");
      }
    } catch (error) {
      console.log(error);
    }
  }, [pid, navigate]);
  return handlePost;
}
