import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:6550",
    timeout: 3000,
    responseType: "json",
  });