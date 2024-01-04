import PostList from "components/Post/List/PostList";

export default function Postview() {
  return (
    <div className="post-list">
      <PostList page={0} size={15} height={"35px"} />
    </div>
  );
}
