import styled from "styled-components";
import "./UserMenu.css";

export default function Usermenu(props) {
  const Button = styled.button`
    border: 0;
    height: ${props.height};
    width: 100%;
    font-size: 12px;

    &:hover {
      text-decoration: underline;
    }
  `;

  const buttons = [
    <Button className="">유저 정보</Button>,
    <Button className="">작성 게시글</Button>,
  ];

  return (
    <div className="user-menu">
      <ul className="container uls">
        {buttons?.map((button) => {
          return <li className="row">{button}</li>;
        })}
      </ul>
    </div>
  );
}
