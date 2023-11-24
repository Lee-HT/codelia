import "./Home.css";

import Header from "../Headers/Header";
import Footer from "../Footers/Footer";
import Body from "pages/Body/Body";

function Home() {
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

export default Home;
