import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_HOST + "/api",
  timeout: 3000,
  responseType: "json",
  headers: {
    Authorization: "token",
  },
});

export const delay = function (text, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
      console.log(text);
    }, time);
  });
};
