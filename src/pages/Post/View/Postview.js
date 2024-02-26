import PostList from "components/Post/List/PostList";
import { useSearchParams } from "react-router-dom";

export default function Postview() {
  const [queryParams] = useSearchParams();
  return (
    <div className="post-list">
      <PostList
        page={0}
        size={15}
        height={"35px"}
        category={queryParams.get("category")}
      />
    </div>
  );
}
