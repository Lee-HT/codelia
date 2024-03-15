import { api } from "API";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function usePostDelete(pid) {
  const navigate = useNavigate();
  const handlePostDelete = useCallback(async () => {
    try {
      const response = await api.delete("/post/" + pid);
      if (response.status === 204) {
        navigate("/post");
      }
    } catch (error) {
      console.log(error);
    }
  }, [pid, navigate]);
  return handlePostDelete;
}
