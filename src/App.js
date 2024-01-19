import Home from "containers/Home/Home";
import LoginProvider from "contexts/Login/LoginContext";
import LoginRedirect from "pages/Login/Redirect/LoginRedirect";
import { createElement } from "react";
import { Route, Routes } from "react-router-dom";


function ContextProvider({ contexts, children }) {
  return contexts.reduce(
    (prev, context) =>
      createElement(context, {
        children: prev,
      }),
    children
  );
}

const contextArray = [LoginProvider];

export default function App() {
  return (
    <ContextProvider contexts={contextArray}>
      <Routes>
        <Route path="/oauth2/redirect" element={<LoginRedirect />}></Route>
        <Route path="/*" element={<Home />}></Route>
      </Routes>
    </ContextProvider>
  );
}
