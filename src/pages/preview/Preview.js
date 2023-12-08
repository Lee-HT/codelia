import { api, delay } from "API";
import PostBar from "components/Post/Bar/PostBar";
import { useEffect, useState } from "react";
import "./Preview.css";

export default function Preview() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await api.get("post");
        const { data } = response;
        console.log(data);
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    }
    getPosts();
  }, []);

  return (
    <div className="preiview">
      {posts?.contents?.map((post) => {
        return (
          <PostBar
            key={post.pid}
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
