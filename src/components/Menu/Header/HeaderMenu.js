import { LoginContext } from "contexts/Login/LoginContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import UserInfo from "../UserInfo/UserInfo";
import "./HeaderMenu.css";

const Button = styled.button`
  border: 0;
`;

export default function HeaderMenu() {
  const navigate = useNavigate();
  const [isMenu, setIsMenu] = useState(false);
  const { userInfo } = useContext(LoginContext);

  function handleLogin() {
    navigate("/login");
  }
  function handleMyMenu() {
    setIsMenu(!isMenu);
  }

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  return (
    <div className="header-menu">
      {userInfo.isLogin ? (
        <div className="user-menu-wrap">
          <Button onClick={handleMyMenu}>{userInfo.username}</Button>
          {isMenu ? <UserInfo /> : null}
        </div>
      ) : (
        <Button onClick={handleLogin}>로그인</Button>
      )}
    </div>
  );
}
