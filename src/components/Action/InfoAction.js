import styled from "styled-components";
import "./InfoAction.css";
import { useNavigate } from "react-router-dom";

const Button = styled.button`
  border: none;
  border-radius: 3px;
  width: 100%;
  height: 30%;
  background-color: white;
`;

export default function InfoAction() {
  const navigate = useNavigate();

  function navPostSave(){
    navigate("/post/save")
  }

  return (
    <div className="info-action">
      <div title="유저 정보" className="user-info">
        유저 정보
      </div>
      <Button title="게시글 작성" className="write-btn" onClick={navPostSave}>
        게시글 작성
      </Button>
    </div>
  );
}
