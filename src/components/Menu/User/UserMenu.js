import styled from "styled-components";
import "./UserMenu.css";

const Button = styled.button`
  border: 0;
  height: ${(props) => props.height};
  width: 100%;
  font-size: 12px;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Usermenu(props) {
  const buttons = [
    <Button height={props.height}>유저 정보</Button>,
    <Button height={props.height}>작성 게시글</Button>,
  ];

  return (
    <div className="row user-menu">
      <ul className="container">
        {buttons?.map((button, index) => {
          return (
            <li className="row" key={index}>
              {button}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
