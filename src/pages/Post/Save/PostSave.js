import { api } from "API";
import useCategoryGroup from "hooks/Category/CategoryGroup/useCategoryGroup";
import { useEffect } from "react";
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

const ErrorMessage = styled.div`
  font-size: 14px;
  flex-basis: 100%;
  color: red;
`;

export default function PostSave() {
  const navigate = useNavigate();
  const { category, getCategory } = useCategoryGroup();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function savePost(data, event) {
    event.preventDefault();
    const params = { ...data };
    console.log("params : " + JSON.stringify(params));

    try {
      const response = await api.post("post", params);
      if (response.status === 201) {
        console.log(response);
        reset();
        navigate("/post");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategory();
  }, [getCategory]);

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
          <div className="category-area">
            <select
              className="set-category"
              {...register("category", {
                required: "카테고리를 선택해 주세요",
              })}
              value={register.category}
              defaultValue={""}
            >
              <option value={""} disabled hidden>
                {"카테고리 선택"}
              </option>
              {Object.values(category)?.map(([id, parent, name]) => {
                return (
                  <option key={id} value={name}>
                    {name}
                  </option>
                );
              })}
            </select>
            <ErrorMessage>{errors.category?.message}</ErrorMessage>
          </div>

          <div className="title-area">
            <ReactTextareaAutosize
              className="set-title"
              title="게시글 제목"
              placeholder="제목을 입력해 주세요"
              {...register("title", {
                required: "제목을 입력해 주세요",
                maxLength: {
                  value: 50,
                  message: "50자 이내로 입력해 주세요",
                },
              })}
            ></ReactTextareaAutosize>
            <ErrorMessage>{errors.title?.message}</ErrorMessage>
          </div>
        </div>
        <ReactTextareaAutosize
          className="set-contents"
          title="게시글 내용"
          placeholder="내용을 입력해 주세요"
          {...register("contents", {
            required: "내용을 입력해 주세요",
            maxLength: {
              value: 3000,
              message: "3000자 이내로 입력해 주세요",
            },
          })}
          minRows={15}
        ></ReactTextareaAutosize>
        <ErrorMessage>{errors.contents?.message}</ErrorMessage>
      </form>
    </div>
  );
}
