import styled from "styled-components";
import "./InfoAction.css";
import { useNavigate } from "react-router-dom";

const Button = styled.button`
  margin-top: 10px;
  border: none;
  border-radius: 3px;
  width: 90%;
  height: 70%;
  background-color: rgba(32, 128, 128, 0.3);
`;

export default function InfoAction() {
  const navigate = useNavigate();

  function navPostSave() {
    navigate("/post/save");
  }

  return (
    <div className="info-action">
      <Button title="게시글 작성" className="write-btn" onClick={navPostSave}>
        게시글 작성
      </Button>
    </div>
  );
}
