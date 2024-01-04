import styled from "styled-components";
import "./PostSave.css";

const ContentsArea = styled.textarea`
  resize: none;
  width: 80%;
  border: none;
  border-radius: 3px;
`;

export default function PostSave() {
  return (
    <div>
      <ContentsArea
        className="post-save-title"
        title="게시글 제목"
        placeholder="제목을 입력하세요"
      ></ContentsArea>
      <ContentsArea
        className="post-save-content"
        title="게시글 내용"
        placeholder="내용을 입력하세요"
      ></ContentsArea>
    </div>
  );
}
