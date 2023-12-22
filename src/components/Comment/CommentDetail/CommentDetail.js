import CommentList from "components/Comment/List/CommentList";
import CommentSave from "components/Comment/Save/CommentSave";
import { useEffect, useRef, useState } from "react";
import "./CommentDetail.css";

export default function CommentDetail(props) {
  const [isSaved, setIsSaved] = useState([]);

  useEffect(() => {
    setIsSaved(false);
    console.log("commentDetail render");
  }, [isSaved]);

  return (
    <div className="container comment-detail">
      <CommentList pid={props.pid} />
      <CommentSave pid={props.pid} saved={setIsSaved} />
    </div>
  );
}
