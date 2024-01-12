import { api, category } from "API";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ReactTextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";
import "./PostSave.css";

const WritingHeader = styled.div`
  margin-top: 20px;
  padding-bottom: 10px;
  padding-left: 10px;
  text-align: start;
  border-bottom: 1px solid;
  display: flex;
  background-color: darkkhaki;
`;

const Button = styled.button`
  border: none;
  border-radius: 3px;

  &:hover {
    text-decoration: underline;
  }
`;

export default function PostSave() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  async function savePost(data, event) {
    event.preventDefault();
    const params = { ...data };
    console.log("data : " + JSON.stringify(params));

    try {
      const response = await api.post("post", params);
      const { data } = response;
      if (response.status === 200) {
        console.log(data);
        reset();
        navigate("/post");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="post-save">
      <form onSubmit={handleSubmit(savePost)}>
        <WritingHeader title="writing header">
          <h4 title="게시글 작성">게시글 작성</h4>
          <div className="tool-area">
            <Button className="commit-btn" type="submit">
              등록
            </Button>
          </div>
        </WritingHeader>
        <div className="editor-wrap">
          <select
            className="set-category"
            {...register("category", { required: true })}
            value={register.category}
            defaultValue={""}
          >
            <option value={""} disabled hidden>
              {"카테고리 선택"}
            </option>
            {Object.values(category)?.map((ctg) => {
              return (
                <option key={ctg} value={ctg}>
                  {ctg}
                </option>
              );
            })}
          </select>
          <ReactTextareaAutosize
            className="set-title"
            title="게시글 제목"
            placeholder="제목을 입력해 주세요"
            {...register("title", {
              required: true,
              minLength: { value: 1, message: "제목을 입력해 주세요" },
              maxLength: {
                value: 100,
                message: "100자 이내로 입력해 주세요",
              },
            })}
          ></ReactTextareaAutosize>
        </div>
        <ReactTextareaAutosize
          className="set-contents"
          title="게시글 내용"
          placeholder="내용을 입력해 주세요"
          {...register("contents", {
            required: true,
            minLength: { value: 1, message: "내용을 입력해 주세요" },
            maxLength: {
              value: 3000,
              message: "3000자 이내로 입력해 주세요",
            },
          })}
          minRows={15}
        ></ReactTextareaAutosize>
      </form>
    </div>
  );
}
