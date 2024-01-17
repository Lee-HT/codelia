import { api } from "API";
import { LoginContext } from "contexts/Login/LoginContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import "./CommentSave.css";

export default function CommentSave(props) {
  const { userInfo } = useContext(LoginContext);
  const { register, handleSubmit, reset } = useForm();

  async function saveComments(data, event) {
    event.preventDefault();
    const { username, uid } = userInfo;
    const pid = props.pid;
    const params = { ...data, pid: pid, uid: uid, username: username };
    console.log("data : " + JSON.stringify(params));

    try {
      const response = await api.post("comment", params);
      const { data } = response;
      if (response.status === 200) {
        console.log(data);
        reset();
        props.setIsSaved(!props.isSaved);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="comment-save">
      <div className="comment-username">
        <div className="">{userInfo.username}</div>
      </div>
      <form onSubmit={handleSubmit(saveComments)}>
        <div>
          <textarea
            className="comment-contents-area"
            {...register("contents", {
              required: "내용은 필수 입니다",
              minLength: { value: 1, message: "내용을 작성해 주세요" },
              maxLength: { value: 300, message: "300자 이내로 입력해 주세요" },
            })}
            placeholder="내용"
          ></textarea>
        </div>
        <div className="comment__button-area">
          <button className="comment-submit" type="submit">
            등록
          </button>
          <button className="comment-submit-cancel" type="reset">
            취소
          </button>
        </div>
      </form>
    </section>
  );
}
