import { LoginContext } from "contexts/Login/LoginContext";
import useCommentDelete from "hooks/Comment/CommentDelete/useCommentDelete";
import { useContext } from "react";
import styled from "styled-components";
import "./CommentList.css";

const LineClamp = styled.div`
  font-size: 14px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

export default function CommentList(props) {
  const { userInfo } = useContext(LoginContext);
  const handleComment = useCommentDelete(props.addTotalElements);

  return (
    <div className="container comment-list">
      {props.comments?.map((comment) => (
        <div className="comment" key={comment.cid}>
          <div id="comment-box" className="comment-box">
            <div className="col-2 comment-username">{comment.cid}</div>
            <div className="col comment-contents">
              <LineClamp>{comment.contents}</LineClamp>
            </div>
            <div className="col-1 comment-modify">
              {userInfo.uid === comment.uid ? (
                <div>
                  <button className="modify">수정</button>
                  <button
                    className="delete"
                    onClick={() => handleComment(comment.cid)}
                  >
                    삭제
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
