import "./PostBar.css";

export default function PostBar(props) {
  return (
    <div className="row border-1 rounded postbar">
      <div className="col-1 bg-secondary opacity-50">{props.category}</div>
      <div className="col-6">{props.title}</div>
      <div className="col-2 bg-secondary opacity-50">{props.username}</div>
      <div className="col-2">{props.createdAt}</div>
      <div className="col-1 bg-secondary opacity-50">{props.view}</div>
    </div>
  );
}