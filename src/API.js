import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API + "/api",
  timeout: 3000,
  responseType: "json",
  withCredentials: true,
});

api.interceptors.request.use(
  function (config) {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  function (error) {
    console.log(error);
    Promise.reject(error);
  }
);

export const delay = function (text, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
      console.log(text);
    }, time);
  });
};

export const category = { category1: "카테고리1", category2: "카테고리2" };
