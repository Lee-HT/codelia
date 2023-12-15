import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import "./HeaderMenu.css";

const Button = styled.button`
  border: 0;
`;

export default function HeaderMenu() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/login");
  }

  return (
    <div className="header-menu">
      <Button onClick={handleLogin}>로그인</Button>
    </div>
  );
}
