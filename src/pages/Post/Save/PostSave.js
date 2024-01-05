import styled from "styled-components";
import "./PostSave.css";
import { useForm } from "react-hook-form";
import { api } from "API";
import { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

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
`;

const TitleArea = styled.textarea`
  height: 50%;
`;

const ContentsArea = styled.textarea``;

export default function PostSave() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const textRef = useRef(null);

  async function savePost(data, event) {
    event.preventDefault();
    console.log(data);
    try {
      const params = { ...data };
      const response = await api.post("post", params);
      const { data } = response;
      if (response.status === 200) {
        console.log(data);
        reset();
        // navigate("/post");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const resize = useCallback(() => {
    textRef.current.style.height = "50%";
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  }, []);

  return (
    <div className="post-save">
      <WritingHeader title="writing header">
        <h4 title="게시글 작성">게시글 작성</h4>
        <div className="tool-area">
          <Button className="commit-btn" onClick={handleSubmit(savePost)}>
            등록
          </Button>
        </div>
      </WritingHeader>
      <div className="editor-wrap">
        <select
          className="set-category"
          placeholder="카테고리를 선택해 주세요"
          {...register("category", { required: true })}
        ></select>
        <TitleArea
          className="set-title"
          title="게시글 제목"
          placeholder="제목을 입력해 주세요"
          rows={1}
          {...register("title", { required: true })}
          onChange={resize}
        ></TitleArea>
      </div>
      <ContentsArea
        className="set-content"
        title="게시글 내용"
        placeholder="내용을 입력해 주세요"
        {...register("content", { required: true })}
      ></ContentsArea>
    </div>
  );
}
