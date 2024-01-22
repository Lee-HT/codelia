import { LoginContext } from "contexts/Login/LoginContext";
import useLogout from "hooks/Logout/useLogout";
import { useCallback, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./UserInfo.css";

export default function UserInfo(props) {
  const { resetUserInfo } = useContext(LoginContext);
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
      <img className="profile-img" alt="" />
      <button className="my-page-btn" onClick={() => {navigate("/my-profile")}}>내 정보</button>
      <button className="logout-btn" onClick={handleLogout}>
        로그아웃
      </button>
    </div>
  );
}
