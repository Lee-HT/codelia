import UserMenu from "components/Menu/User/UserMenu";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "./UserProfile.css";

const Button = styled.button`
  border: 0;
  height: 100%;

  &:hover {
    text-decoration: underline;
  }
`;

export default function UserProfile(props) {
  const ref = useRef(null);
  const [isMenu, setIsMenu] = useState(false);

  function handleMenu() {
    setIsMenu(!isMenu);
  }

  useEffect(() => {
    function handleMenuClose(event) {
      console.log(event.target);
      if (isMenu && (!ref.current || !ref.current.contains(event.target))) {
        console.log("e :" + event.target);
        setIsMenu(false);
      }
    }

    window.addEventListener("click", handleMenuClose);
    return () => {
      window.removeEventListener("click", handleMenuClose);
    };
  }, [isMenu]);

  return (
    <div className="row-1 user-profile" ref={ref}>
      <Button className="col user-menu-button" onClick={handleMenu}>
        {props.username}
      </Button>
      {isMenu && (
        <div className="col menus">
          <UserMenu height={props.height} />
        </div>
      )}
    </div>
  );
}
