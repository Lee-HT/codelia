const { default: Home } = require("containers/Home/Home");
const { Route, Routes } = require("react-router-dom");

export default function App() {
  return (
    <Routes>
      <Route path="/*" element={<Home/>}></Route>
    </Routes>
  );
}
