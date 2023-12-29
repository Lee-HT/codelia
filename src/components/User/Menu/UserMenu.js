import styled from "styled-components";
import "./UserMenu.css";

const Ul = styled.ul`
  padding: 0;
  margin: 0;
  background-color: white;
`;

const Li = styled.li`
  background-color: transparent;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Button = styled.button`
  margin: 1px auto;
  padding:0;
  border: 0;
  border-radius: 3px;
  font-size: 13px;
  width: 100%;
  height: 100%;
  background-color: white;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Usermenu(props) {
  const buttons = [<Button>유저 정보</Button>, <Button>작성 게시글</Button>];

  return (
    <div className="user-menu">
      <Ul className="user-menu-contents">
        {buttons?.map((button, index) => {
          return <Li key={index}>{button}</Li>;
        })}
      </Ul>
    </div>
  );
}
