import { TokenContext } from "contexts/Login/TokenContext";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function LoginRedirect() {
  const params = useParams();

  const { tokens, setTokens } = useContext(TokenContext);
  useEffect(() => {
    setTokens("accessToken","");
    // 방문 히스토리 저장 X
    // window.location.replace("/");
  }, []);

  return <div>{params.accessToken}</div>;
}
