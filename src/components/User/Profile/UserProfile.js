import styled from "styled-components";
import "./UserProfile.css";
import { useState } from "react";
import Usermenu from "components/Menu/User/UserMenu";

export default function UserProfile(props) {
  const [isMenu, setIsMenu] = useState(false);
  const Button = styled.button`
    border: 0;

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
      {isMenu && <Usermenu className="col"/>}
    </div>
  );
}
