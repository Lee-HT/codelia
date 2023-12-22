import LoginProvider from "contexts/Login/LoginContext";
import TokenProvider from "contexts/Login/TokenContext";
import LoginRedirect from "pages/Login/Redirect/LoginRedirect";
import { createElement } from "react";

const { default: Home } = require("containers/Home/Home");
const { Route, Routes } = require("react-router-dom");

function ContextProvider({ contexts, children }) {
  return contexts.reduce(
    (prev, context) =>
      createElement(context, {
        children: prev,
      }),
    children
  );
}

const contextArray = [LoginProvider, TokenProvider];

export default function App() {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <ContextProvider contexts={contextArray}>
            <Home />
          </ContextProvider>
        }
      ></Route>
      <Route path="/oauth2/redirect" element={<LoginRedirect />}></Route>
    </Routes>
  );
}
