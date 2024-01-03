import LoginProvider from "contexts/Login/LoginContext";
import NotFound from "pages/Error/404error/NotFound";
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

const contextArray = [LoginProvider];

export default function App() {
  return (
    <ContextProvider contexts={contextArray}>
      <Routes>
        <Route path={process.env.PUBLIC_URL+"/*"}>
          <Route path="oauth2/redirect" element={<LoginRedirect />}></Route>
          <Route path="*" element={<Home />}></Route>
        </Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </ContextProvider>
  );
}
