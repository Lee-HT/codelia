import { useNavigate } from "react-router-dom";
import "./PostBar.css";

export default function PostBar(props) {
  const navigate = useNavigate();

  function handlePost() {
    navigate("/post/" + props.pid);
  }

  return (
    <div className="row border-1 rounded post-bar">
      <button className="col-1 bg-secondary">{props.category}</button>
      <button className="col" onClick={handlePost}>
        {props.title}
      </button>
      <div className="col-2 bg-secondary">{props.username}</div>
      <div className="row col-2 post-info">
        <div className="post-created-date">{props.createdAt}</div>
        <div className="post-view-count">{props.view}</div>
      </div>
    </div>
  );
}
