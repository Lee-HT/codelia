import styled from "styled-components";
import "./UserMenu.css";

const Ul = styled.ul`
  height: ${(props) => props.height}
  width: ${(props) => props.width}
`;

const Button = styled.button`
  border: 0;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  font-size: 12px;
  transform: translateX(-50%);

  &:hover {
    text-decoration: underline;
  }
`;

export default function Usermenu(props) {
  const buttons = [
    <Button height={props.height} width={props.width}>
      유저 정보
    </Button>,
    <Button height={props.height} width={props.width}>
      작성 게시글
    </Button>,
  ];

  return (
    <div className="row user-menu">
      <Ul className="container" height={props.height} width={props.width}>
        {buttons?.map((button, index) => {
          return (
            <li className="row" key={index}>
              {button}
            </li>
          );
        })}
      </Ul>
    </div>
  );
}
