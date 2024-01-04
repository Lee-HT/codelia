import styled from "styled-components";
import "./UserInfo.css";

const Button = styled.button`
  border: none;
  border-radius: 3px;
  width: 100%;
  height: 30%;
  background-color: white;
  
`;

export default function UserInfo() {
  return (
    <div className="info-action">
      <div title="유저 정보" className="user-info">유저 정보</div>
      <Button title="게시글 작성" className="write-btn">게시글 작성</Button>
    </div>
  );
}
