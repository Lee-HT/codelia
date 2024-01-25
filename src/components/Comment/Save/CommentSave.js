import { api } from "API";
import { LoginContext } from "contexts/Login/LoginContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import "./CommentSave.css";

const ErrorMessage = styled.div`
  margin-left: 3%;
  font-size: 14px;
  color: red;
`;

export default function CommentSave(props) {
  const { userInfo } = useContext(LoginContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function saveComments(data, event) {
    event.preventDefault();
    const { username, uid } = userInfo;
    const pid = props.pid;
    const params = { ...data, pid: pid, uid: uid, username: username };
    console.log("data : " + JSON.stringify(params));

    try {
      const response = await api.post("comment", params);
      if (response.status === 201) {
        if (props.finalEmpty) {
          props.setCurrentPage(props.totalPage + 1);
        } else  {
          props.addTotalElements(1);
          props.setCurrentPage(props.totalPage);
        }
        reset();
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
              required: "내용을 작성해 주세요",
              maxLength: { value: 300, message: "300자 이내로 입력해 주세요" },
            })}
            placeholder="내용"
          ></textarea>
        </div>
        <div className="comment-command-area">
          <ErrorMessage>{errors.contents?.message}</ErrorMessage>
          <div className="submit-area">
            <button className="comment-submit" type="submit">
              등록
            </button>
            <button className="comment-submit-cancel" type="reset">
              취소
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
