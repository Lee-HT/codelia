import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_HOST + "/api",
  timeout: 3000,
  responseType: "json",
  withCredentials: true,
});

export const delay = function (text, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
      console.log(text);
    }, time);
  });
};
