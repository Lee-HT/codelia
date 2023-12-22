import { api } from "API";
import { LoginContext } from "contexts/Login/LoginContext";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./CommentSave.css";

export default function CommentSave(props) {
  const { userInfo, setUserInfo } = useContext(LoginContext);
  const { register, watch, handleSubmit } = useForm();

  useEffect(() => {
    console.log(watch());
  });

  async function saveComments(data, event) {
    event.preventDefault();
    console.log(data);
    const param = data;
    const { username, uid } = userInfo;
    const pid = props.pid;
    try {
      const response = await api.post("comment", {
        ...param,
        pid: pid,
        uid: uid,
        username: username,
      });
      const { data } = response;
      if (response.status === 200) {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function cancelComments() {}

  return (
    <div className="container comment-save">
      <div className="comment-username">
        <div className="">{userInfo.username}</div>
      </div>
      <form onSubmit={handleSubmit(saveComments)}>
        <div>
          <textarea
            className="comment-contents-area"
            {...register("contents", { required: true })}
            placeholder="내용"
          ></textarea>
        </div>
        <div className="comment__button-area">
          <button className="comment-submit" type="submit">
            등록
          </button>
          <button className="comment-submit-cancel" onClick={cancelComments}>
            취소
          </button>
        </div>
      </form>
    </div>
  );
}
