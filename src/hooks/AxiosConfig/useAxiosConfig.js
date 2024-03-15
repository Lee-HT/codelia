import { api } from "API";
import useTokenRefresh from "hooks/Token/useTokenRefresh";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useAxiosConfig() {
  const { tokenRefresh } = useTokenRefresh();
  const navigate = useNavigate();

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
      const targetUrl = error.config.url;

      if (
        status === 401 &&
        targetUrl !== "/oauth2/token" &&
        targetUrl !== "/oauth2/userinfo"
      ) {
        await tokenRefresh();
        const originalRequest = error.config;
        if (sessionStorage.getItem("accessToken") != null) {
          originalRequest.headers.Authorization =
            sessionStorage.getItem("accessToken");
          return api(originalRequest);
        } else {
          navigate("/login");
        }
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    return () => {
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(responseInterceptor);
    };
  }, [requestInterceptor, responseInterceptor]);
  return;
}
