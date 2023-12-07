import { api } from "API";
import PostBar from "components/Post/Bar/PostBar";
import { useEffect, useState } from "react";
import "./Preview.css";

export default function Preview() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api
      .get("post")
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => console.log(error));
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
