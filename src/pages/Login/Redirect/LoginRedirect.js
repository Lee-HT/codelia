import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function LoginRedirect() {
  const { params } = useParams();

  const [tokens, setTokens] = useState("");
  useEffect(() => {
    setTokens("headers : " + params.Authorization);
    // 방문 히스토리 저장 X
    // window.location.replace("/");
  }, [params,setTokens]);

  return <div>{tokens}</div>;
}
