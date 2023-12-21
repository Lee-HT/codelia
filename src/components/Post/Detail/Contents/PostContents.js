import "./PostContents.css";

export default function PostContents(props) {
  return (
    <div className="contents-container">
      <div className="contents">{props.contents}</div>
    </div>
  );
}
