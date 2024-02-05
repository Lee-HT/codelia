import { api } from "API";
import useTokenRefresh from "hooks/Token/useTokenRefresh";
import { useEffect } from "react";

export default function useAxiosConfig() {
  const { tokenRefresh } = useTokenRefresh();

  const requestInterceptor = api.interceptors.request.use(
    (request) => {
      console.log(request);
      const token = sessionStorage.getItem("accessToken");
      if (token) {
        request.headers["Authorization"] = token;
      }
      return request;
    },
    (error) => {
      console.log(error);
      return error;
      // return Promise.reject(error);
    }
  );

  const responseInterceptor = api.interceptors.response.use(
    (response) => {
      console.log(response);
      return response;
    },
    async (error) => {
      console.log(error);
      const status = error.response.status;
      const targetUrl = error.url;
      if (targetUrl === "oauth2/userinfo" || status === 401 || status === 403) {
        await tokenRefresh();
      }
      return error;
      // return Promise.reject(error);
    }
  );

  useEffect(() => {
    return () => {
      console.log("eject");
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(responseInterceptor);
    };
  }, [requestInterceptor, responseInterceptor]);
  return;
}
