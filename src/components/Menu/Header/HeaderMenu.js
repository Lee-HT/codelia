import { LoginContext } from "contexts/Login/LoginContext";
import { useCallback, useContext, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import UserInfo from "../UserInfo/UserInfo";
import "./HeaderMenu.css";

const Button = styled.button`
  border: 0;
  background-color: rgba(0, 128, 128, 0.15);
`;

export default function HeaderMenu() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [isMenu, setIsMenu] = useState(false);
  const [curLang, setCurLang] = useState("");
  const Ref = useRef(null);
  const { userInfo } = useContext(LoginContext);

  function handleLogin() {
    navigate("/login");
  }
  function handleMyMenu() {
    setIsMenu(!isMenu);
  }

  const changeLanguage = useCallback(
    (event) => {
      i18n.changeLanguage(event.target.value);
      setCurLang("");
    },
    [i18n]
  );

  return (
    <div className="header-menu">
      <div className="header-menu-box">
        {userInfo.isLogin ? (
          <div className="user-menu-wrap" ref={Ref}>
            <Button onClick={handleMyMenu}>{userInfo.username}</Button>
            {isMenu ? (
              <UserInfo inputRef={Ref} isMenu={isMenu} setIsMenu={setIsMenu} />
            ) : null}
          </div>
        ) : null}
        {userInfo.isLogin === false ? (
          <Button onClick={handleLogin}>{t("login")}</Button>
        ) : null}
        <div className="language-area">
          <select
            className="language-menu"
            onChange={changeLanguage}
            value={curLang}
          >
            <option value={""} disabled hidden>
              {t("language")}
            </option>
            {i18n.languages?.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
