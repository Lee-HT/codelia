import Contents from "containers/Contents/Contents";
import Footer from "../Footers/Footer";
import Header from "../Headers/Header";
import "./Home.css";

export default function Home() {
  return (
    <div className="container home">
      <div>
        <Header />
      </div>
      <div>
        <Contents />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
