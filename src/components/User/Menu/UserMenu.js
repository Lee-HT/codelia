import { useCallback } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./UserMenu.css";

const Ul = styled.ul`
  padding: 0;
  margin-top: 2px;
  background-color: white;
  border-radius: 3px;
`;

const Li = styled.li`
  background-color: transparent;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Button = styled.button`
  margin: 5px auto;
  padding: 0;
  border: 0;
  border-radius: 3px;
  font-size: 13px;
  background-color: white;
  
  height: ${(props) => props.height || "100%"};
  width: ${(props) => props.width || "100%"};

  min-height: ${(props) => props.height || "100%"};
  width: ${(props) => props.width || "100%"};

  min-height: ${(props) => props.height || "100%"};
  width: ${(props) => props.width || "100%"};

  &:hover {
    text-decoration: underline;
  }
`;

export default function Usermenu(props) {
  const navigate = useNavigate();

  const handleWritePosts = useCallback(() => {
    const queryParams = { uid: props.uid };

    navigate({
      pathname: "/post/user",
      search: `?${createSearchParams(queryParams)}`,
    });
  }, [navigate, props.uid]);

  return (
    <div className="user-menu">
      <Ul className="user-menu-contents">
        <Li>
          <Button
            onClick={handleWritePosts}
            height={props.height}
            width={props.width}
          >
            작성 게시글
          </Button>
        </Li>
      </Ul>
    </div>
  );
}
