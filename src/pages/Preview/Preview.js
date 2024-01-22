import PostList from "components/Post/List/PostList";
import "./Preview.css";

export default function Preview() {
  return (
    <div className="preview">
      <PostList page={0} size={10} height={"35px"} notControl={true} />
    </div>
  );
}
