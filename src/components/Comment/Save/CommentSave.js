import { useState } from "react";
import "./CommentSave.css";

export default function CommentSave(props) {
  const [username, setUsername] = useState("chinokafuu");
  const [comment, setComments] = useState({
    pid: 0,
    uid: 0,
    username: "",
    contents: "",
  });
  function saveComments() {}
  function cancelComments() {}
  return (
    <div className="container comment-save">
      <div className="comment-save-username">
        <div className="">{username}</div>
      </div>
      <div>
        <textarea
          className="comment-contents-area"
          type="contents"
          name="contents"
          placeholder="내용"
        ></textarea>
      </div>
      <div className="comment__button-area">
        <button className="comment-submit" onClick={saveComments}>
          등록
        </button>
        <button className="comment-submit-cancel" onClick={cancelComments}>
          취소
        </button>
      </div>
    </div>
  );
}
