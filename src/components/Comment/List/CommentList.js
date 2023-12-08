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
        <div className="row comment-box" key={comment.cid}>
          <div className="col-1 comment-cid">{comment.cid}</div>
          <div className="col-11 comment-contents">{comment.contents}</div>
        </div>
      ))}
    </div>
  );
}
