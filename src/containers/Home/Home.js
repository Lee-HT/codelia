import "./Home.css";

import Body from "pages/Body/Body";
import Footer from "../Footers/Footer";
import Header from "../Headers/Header";

export default function Home() {
  return (
    <div className="container main">
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
