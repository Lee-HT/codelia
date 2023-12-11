import { api } from "API";
import { useEffect, useState } from "react";
import "./CommentList.css";

export default function CommentList(props) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function getComments() {
      try {
        const response = await api.get("comment/post/" + props.pid);
        const { data } = response;
        console.log(data);
        setComments(data);
      } catch (error) {
        console.log(error);
      }
    }
    getComments();
  }, [props.pid]);

  return (
    <div className="container comment-list">
      {comments?.contents?.map((comment) => (
        <div className="comment" key={comment.cid}>
          <div id="comment-box" className="row comment-box">
            <div className="col-2 comment-username">{comment.cid}</div>
            <div className="col-9 comment-contents">{comment.contents}</div>
            <div className="col-1 comment-modify">
              <button className="modify">수정</button>
              <button className="delete">삭제</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
