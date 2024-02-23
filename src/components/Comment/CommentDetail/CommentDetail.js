import CommentList from "components/Comment/List/CommentList";
import CommentSave from "components/Comment/Save/CommentSave";
import Pagination from "components/Menu/Pagination/Pagination";
import useCommentGet from "hooks/Comment/CommentGet/useCommentGet";
import { useCallback, useEffect, useState } from "react";
import "./CommentDetail.css";

export default function CommentDetail(props) {
  const pageLimit = 5;
  const commentSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const { handleComment, comments, totalElements, numberOfElements } =
    useCommentGet(props.pid, setTotalPage);

  const getComments = useCallback(() => {
    handleComment(currentPage - 1, commentSize);
    console.log("call comment API");
  }, [handleComment, currentPage]);

  useEffect(() => {
    getComments();
  }, [getComments]);

  return (
    <div className="comment-detail">
      <CommentList
        comments={comments}
        getComments={getComments}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        numberOfElements={numberOfElements}
      />
      <Pagination
        limit={pageLimit}
        currentPage={currentPage}
        totalPage={totalPage}
        setCurrentPage={setCurrentPage}
      />
      <CommentSave
        pid={props.pid}
        totalPage={totalPage}
        currentPage={currentPage}
        emptySpace={totalElements % commentSize === 0}
        setCurrentPage={setCurrentPage}
        getComments={getComments}
      />
    </div>
  );
}
