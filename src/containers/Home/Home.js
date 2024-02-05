import Contents from "containers/Contents/Contents";
import useAxiosConfig from "hooks/AxiosConfig/useAxiosConfig";
import MyProfile from "pages/User/MyProfile/MyProfile";
import { Route, Routes } from "react-router-dom";
import Footer from "../Footers/Footer";
import Header from "../Headers/Header";
import "./Home.css";

export default function Home() {
  useAxiosConfig();

  return (
    <div className="home">
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/my-profile" element={<MyProfile />}></Route>
          <Route path="/*" element={<Contents />}></Route>
        </Routes>
      </div>
      <div> 
        <Footer />
      </div>
    </div>
  );
}
