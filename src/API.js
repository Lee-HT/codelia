import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_HOST +"/api",
  timeout: 3000,
  responseType: "json",
});
