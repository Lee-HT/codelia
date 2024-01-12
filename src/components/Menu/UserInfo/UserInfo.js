import useLogout from "hooks/Logout/UseLogout";
import { useCallback, useContext, useEffect } from "react";
import "./UserInfo.css";
import { LoginContext } from "contexts/Login/LoginContext";

export default function UserInfo(props) {
  const { resetUserInfo } = useContext(LoginContext);
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
      <img className="profile-img" alt="" />
      <button className="my-page-btn">내 정보</button>
      <button className="logout-btn" onClick={handleLogout}>
        로그아웃
      </button>
    </div>
  );
}
