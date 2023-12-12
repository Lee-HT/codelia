import PostList from "pages/Post/PostList/PostList";
import "./Preview.css";

export default function Preview() {
  return (
    <div className="preiview">
      <PostList page="0" size="10" />
    </div>
  );
}
