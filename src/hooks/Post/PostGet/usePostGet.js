import { api } from "API";
import { useCallback, useState } from "react";

export default function usePostGet(pid, setTotalPage) {
  const [comments, setComments] = useState([]);
  const [totalElements, setTotalElements] = useState(null);
  const [numberOfElements, setNumberOfElements] = useState(null);

  const handleComment = useCallback(
    (currentPage, size) => {
      const params = { page: currentPage, size: size };

      async function getComments() {
        try {
          const response = await api.get("comment/post/" + pid, { params });
          const { data } = response;
          if (response.status === 200) {
            console.log(data);
            setComments(data.contents);
            setTotalPage(data.totalPages);
            setTotalElements(data.totalElements);
            setNumberOfElements(data.numberOfElements);
          }
        } catch (error) {
          console.log(error);
        }
      }
      getComments();
    },
    [pid, setTotalPage]
  );

  return {
    handleComment,
    comments,
    totalElements,
    numberOfElements,
  };
}
