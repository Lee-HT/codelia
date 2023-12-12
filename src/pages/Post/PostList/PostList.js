import { api } from "API";
import PostBar from "components/Post/Bar/PostBar";
import { useEffect, useState } from "react";
import "./PostList.css";

export default function PostList(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      try {
        const params = {
            page: props.page,
            size: props.size,
          };
        const response = await api.get("post", { params });
        const { data } = response;
        console.log(data);
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    }
    getPosts();
  }, [props.page,props.size]);

  return (
    <div className="post-list">
      {posts?.contents?.map((post) => {
        return (
          <PostBar
            key={post.pid}
            pid={post.pid}
            category={post.category}
            title={post.title}
            uid={post.uid}
            username={post.username}
            createdAt={post.createdAt?.substring(0, 10)}
          />
        );
      })}
    </div>
  );
}
