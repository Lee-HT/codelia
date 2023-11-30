import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import Home from "./containers/Home/Home";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const getAuth = (token) => axios.create({
  baseURL: "http://localhost:6551",
  headers: {
      // "Content-Type": `application/json;charset=UTF-8`,
      // "Accept": "application/json",
      // "Authorization": "Bearer "+token,
    
      "Access-Control-Allow-Origin": `http://localhost:6550`,
      'Access-Control-Allow-Credentials': "true",
  }
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
