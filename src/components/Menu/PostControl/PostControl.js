import { useCallback, useEffect } from "react";
import styled from "styled-components";
import "./PostControl.css";
import usePostDelete from "hooks/Post/PostDelete/usePostDelete";

const Button = styled.button`
  font-size: 18px;
  margin-top: 5px;
  width: 100%;
`;

export default function PostControl(props) {
  const handlePost = usePostDelete(props.pid);
  const handleMenuClose = useCallback(
    (event) => {
      console.log(event.target);
      if (
        props.isMenu &&
        (!props.inputRef.current ||
          !props.inputRef.current.contains(event.target))
      ) {
        props.setIsMenu(false);
      }
    },
    [props]
  );

  useEffect(() => {
    if (props.isMenu) {
      window.addEventListener("click", handleMenuClose);
    } else {
      window.removeEventListener("click", handleMenuClose);
    }
    return () => window.removeEventListener("click", handleMenuClose);
  }, [props.isMenu, handleMenuClose]);

  return (
    <div className="setting-menu">
      <Button>수정</Button>
      <Button onClick={handlePost}>삭제</Button>
    </div>
  );
}
