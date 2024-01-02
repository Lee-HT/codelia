import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function LoginRedirect() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.setItem("accessToken", params.get("authorization"));
    localStorage.clear();
    navigate("/");

    // 방문 히스토리 저장 X
    // window.location.replace("/");
  }, [params, navigate]);

  return <div></div>;
}
