import { api } from "API";
import { useEffect, useState } from "react";
import "./CommentList.css";

export default function CommentList(props) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    api
      .get("comment/post/" + props.pid)
      .then((response) => {
        console.log(response.data);
        setComments(response.data);
      })
      .catch((error) => console.log(error));
  }, [props.pid]);

  return (
    <div className="comment-list">
      {comments?.contents?.map((comment) => (
        <div className="row comment-box" key={comment.cid}>
          <div className="col-1 comment-cid">{comment.cid}</div>
          <div className="col-11 comment-contents">{comment.contents}</div>
        </div>
      ))}
    </div>
  );
}
