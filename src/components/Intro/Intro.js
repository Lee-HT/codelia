import "./Intro.css";

export default function Intro() {
  return (
    <div className="row intro">
      <img
        className="cover-image"
        src={`${process.env.PUBLIC_URL}/Image/Intro/Intro.png`}
        alt="Intro"
        loading="lazy"
      />
    </div>
  );
}
