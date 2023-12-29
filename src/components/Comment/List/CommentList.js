import { api } from "API";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import "./CommentList.css";

const LineClamp = styled.div`
  font-size: 14px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

export default function CommentList(props) {
  const [comments, setComments] = useState([]);
  const params = useMemo(() => {
    return { page: props.currentPage, size: props.size };
  }, [props]);

  useEffect(() => {
    async function getComments() {
      try {
        const response = await api.get("comment/post/" + props.pid, { params });
        const { data } = response;
        console.log("comment_list : " + data);
        setComments(data);
        props.setTotalPage(data.totalPages);
      } catch (error) {
        console.log(error);
      }
    }
    getComments();
  }, [props, params]);

  return (
    <div className="container comment-list">
      {comments?.contents?.map((comment) => (
        <div className="comment" key={comment.cid}>
          <div id="comment-box" className="comment-box">
            <div className="col-2 comment-username">{comment.cid}</div>
            <div className="col comment-contents">
              <LineClamp>{comment.contents}</LineClamp>
            </div>
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
