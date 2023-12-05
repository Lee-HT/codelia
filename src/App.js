const { default: Home } = require("containers/Home/Home");
const { default: Postview } = require("pages/PostDetail/PostDetail");
const { Route, Routes } = require("react-router-dom");

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/*" ></Route>

      <Route path="/post"></Route>
      <Route path="/post/:pid" element={<Postview/>}></Route>
    </Routes>
  );
}
