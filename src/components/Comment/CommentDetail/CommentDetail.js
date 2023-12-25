import CommentList from "components/Comment/List/CommentList";
import CommentSave from "components/Comment/Save/CommentSave";
import { useEffect, useState } from "react";
import "./CommentDetail.css";

export default function CommentDetail(props) {
  const [isSaved, setIsSaved] = useState([]);

  useEffect(() => {
    console.log("commentDetail render" + isSaved);
  }, [isSaved]);

  return (
    <div className="container comment-detail">
      <CommentList pid={props.pid} saved={isSaved} />
      <CommentSave pid={props.pid} saved={setIsSaved} />
    </div>
  );
}
