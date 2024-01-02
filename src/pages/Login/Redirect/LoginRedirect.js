import { TokenContext } from "contexts/Login/TokenContext";
import { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function LoginRedirect() {
  const [params] = useSearchParams();
  const { tokens, setTokens } = useContext(TokenContext);
  const navigate = useNavigate();

  useEffect(() => {
    setTokens("accessToken", params.get("authorization"));
    navigate("/");

    // 방문 히스토리 저장 X
    // window.location.replace("/");
  }, [params, setTokens, navigate]);

  return <div></div>;
}
