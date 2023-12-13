import styled from "styled-components";
import "./UserMenu.css";

export default function Usermenu(props) {
  const Button = styled.button`
    border: 0;
    width: 100%;
    font-size: 12px;

    &:hover {
      text-decoration: underline;
    }
  `;

  return (
    <div className="user-menu">
      <ul>
        <li>
          <Button className="">유저 정보</Button>
        </li>
        <li>
          <Button className="">게시글 목록</Button>
        </li>
      </ul>
    </div>
  );
}
