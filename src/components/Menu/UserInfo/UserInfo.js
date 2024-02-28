import { LoginContext } from "contexts/Login/LoginContext";
import useLogout from "hooks/Logout/useLogout";
import { useCallback, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./UserInfo.css";

const Button = styled.button`
  width: 40%;
  height: 25%;
  border-radius: 5px;
`;

export default function UserInfo(props) {
  const { userInfo, resetUserInfo } = useContext(LoginContext);
  const navigate = useNavigate();
  const handleLogout = useLogout(resetUserInfo);
  const handleMenuClose = useCallback(
    (event) => {
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
    <div className="user-info-wrap">
      <img
        className="profile-img"
        alt="profile-img"
        src={userInfo.profileImg}
      />
      <Button
        onClick={() => {
          navigate("/my-profile");
        }}
      >
        내 정보
      </Button>
      <Button
        onClick={() => {
          navigate("/post/user?uid=" + userInfo.uid);
        }}
      >
        작성 게시글
      </Button>
      <Button onClick={handleLogout}>로그아웃</Button>
    </div>
  );
}
