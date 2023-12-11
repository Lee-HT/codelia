import { api } from "API";
import { useState } from "react";
import "./CommentSave.css";

export default function CommentSave(props) {
  const [comment, setComments] = useState({
    pid: props.pid,
    uid: 1,
    username: "chinokafuu",
    contents: "",
  });

  function handleComment(event) {
    const { value, name } = event.target;
    console.log(value);
    setComments((prev) => ({ ...prev, [name]: value }));
  }

  async function saveComments() {
    try {
      const response = await api.post("comment", comment);
      const { data } = response;
      if (response.status === 200) {
        console.log(data);
        setComments(data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function cancelComments() {}

  return (
    <div className="container comment-save">
      <div className="comment-save-username">
        <div className="">{comment.contents}</div>
        <div className="">{comment.username}</div>
      </div>
      <div>
        <textarea
          className="comment-contents-area"
          type="contents"
          name="contents"
          placeholder="내용"
          onChange={handleComment}
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
