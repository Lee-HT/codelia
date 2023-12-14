import UserMenu from "components/Menu/User/UserMenu";
import { useState } from "react";
import styled from "styled-components";
import "./UserProfile.css";

export default function UserProfile(props) {
  const [isMenu, setIsMenu] = useState(false);
  const Button = styled.button`
    border: 0;
    height: 100%;

    &:hover {
      text-decoration: underline;
    }
  `;

  function handleMenu() {
    setIsMenu(!isMenu);
  }

  return (
    <div className="row user-profile">
      <Button className="col user-menu-button" onClick={handleMenu}>
        {props.username}
      </Button>
      {isMenu && <UserMenu className="col" height={props.height}/>}
    </div>
  );
}
