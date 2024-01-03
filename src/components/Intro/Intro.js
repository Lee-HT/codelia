import { public_url } from "API";
import "./Intro.css";

export default function Intro() {
  return (
    <div className="row intro">
      <img
        className="cover-image"
        src={public_url("/Image/Intro/Intro.png")}
        alt="Intro"
        loading="lazy"
      />
    </div>
  );
}
