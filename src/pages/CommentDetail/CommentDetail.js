import CommentList from "components/Comment/List/CommentList";
import CommentSave from "components/Comment/Save/CommentSave";
import "./CommentDetail.css";

export default function CommentDetail(props) {
  return (
    <div className="comment-detail">
      <CommentList pid={props.pid} />
      <CommentSave />
    </div>
  );
}
