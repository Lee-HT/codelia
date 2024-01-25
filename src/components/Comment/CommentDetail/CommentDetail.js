import CommentList from "components/Comment/List/CommentList";
import CommentSave from "components/Comment/Save/CommentSave";
import Pagination from "components/Menu/Pagination/Pagination";
import { useEffect, useState } from "react";
import "./CommentDetail.css";
import usePostGet from "hooks/Post/PostGet/usePostGet";

export default function CommentDetail(props) {
  const pageLimit = 5;
  const commentSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const { handleComment, comments, totalElements, addTotalElements } =
    usePostGet(props.pid, setTotalPage);

  useEffect(() => {
    handleComment(currentPage - 1, commentSize);
    console.log("call comment API");
  }, [handleComment, currentPage, totalElements]);

  return (
    <div className="comment-detail">
      <CommentList comments={comments} addTotalElements={addTotalElements} />
      <Pagination
        limit={pageLimit}
        currentPage={currentPage}
        totalPage={totalPage}
        setCurrentPage={setCurrentPage}
      />
      <CommentSave
        pid={props.pid}
        totalPage={totalPage}
        finalEmpty={totalElements % commentSize === 0}
        addTotalElements={addTotalElements}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
