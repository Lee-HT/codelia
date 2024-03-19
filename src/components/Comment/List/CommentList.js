import LikeButton from "components/Like/LikeButton";
import { LoginContext } from "contexts/Login/LoginContext";
import useCommentDelete from "hooks/Comment/CommentDelete/useCommentDelete";
import { useCallback, useContext } from "react";
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
  const handleCommentDelete = useCommentDelete();
  const deleteProcess = useCallback(
    async (cid) => {
      await handleCommentDelete(cid);
      if (props.numberOfElements === 1) {
        props.setCurrentPage(props.currentPage - 1);
      } else {
        await props.getComments();
      }
    },
    [handleCommentDelete, props]
  );

  return (
    <div className="container comment-list">
      {props.comments?.map((comment) => (
        <div className="comment" key={comment.cid}>
          <div id="comment-box" className="comment-box">
            <div className="col-2 comment-username">{comment.username}</div>
            <div className="col comment-contents">
              <LineClamp>{comment.contents}</LineClamp>
            </div>
            <div className="col-1" style={{ height: "100%" }}>
              {userInfo.isLogin ? (
                <div style={{ height: "100%" }}>
                  {userInfo.uid === comment.uid ? (
                    <div className="modify-box">
                      <button className="modify">수정</button>
                      <button
                        className="delete"
                        onClick={() => deleteProcess(comment.cid)}
                      >
                        삭제
                      </button>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
            <LikeButton
              className="col-1"
              cid={comment.cid}
              uid={userInfo.uid}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
