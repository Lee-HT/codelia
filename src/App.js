const { default: Home } = require("containers/Home/Home");
const { default: Postview } = require("pages/PostView/Postview");
const { Route, Routes } = require("react-router-dom");

export default function App() {
  return (
    <Routes>
      <Route index element={<Home/>}></Route>
      <Route path="/post" element={<Postview/>}></Route>
    </Routes>
  );
}
