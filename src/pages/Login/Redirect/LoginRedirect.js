import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useTokenRefresh from "../../../hooks/Token/useTokenRefresh";

export default function LoginRedirect() {
  const navigate = useNavigate();
  const { tokenRefresh } = useTokenRefresh();

  useEffect(() => {
    tokenRefresh();
    navigate("/");

    // 방문 히스토리 저장 X
    // window.location.replace("/");
  }, [navigate, tokenRefresh]);

  return <div></div>;
}
