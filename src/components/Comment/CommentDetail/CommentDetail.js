import CommentList from "components/Comment/List/CommentList";
import CommentSave from "components/Comment/Save/CommentSave";
import Pagination from "components/Menu/Pagination/Pagination";
import { useEffect, useState } from "react";
import "./CommentDetail.css";

export default function CommentDetail(props) {
  const pageLimit = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    console.log("commentDetail render");
  }, [isSaved]);

  return (
    <div className="container comment-detail">
      <CommentList
        pid={props.pid}
        currentPage={currentPage - 1}
        size={5}
        isSaved={isSaved}
        setTotalPage={setTotalPage}
      />
      <Pagination
        limit={pageLimit}
        currentPage={currentPage}
        totalPage={totalPage}
        setCurrentPage={setCurrentPage}
      />
      <CommentSave
        pid={props.pid}
        isSaved={isSaved}
        setIsSaved={setIsSaved}
        totalPage={totalPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
