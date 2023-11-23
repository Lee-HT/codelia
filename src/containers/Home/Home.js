import "./Home.css";

import Header from "../Headers/Header";
import Footer from "../Footers/Footer";

function Home() {
  return (
    <div className="main">
      <Header className="main__header" />
      <button type="button" class="btn btn-outline-info btn-lg">Info</button>
      <Footer className="main__footer" />
    </div>
  );
}

export default Home;
