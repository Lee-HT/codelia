import { useEffect, useState } from "react";
import "./Preview.css";
import axios from "axios";

import PostBar from "components/Post/Bar/PostBar";

export const client = axios.create({
  baseURL: "http://localhost:6550",
  timeout: 3000,
  responseType: "json",
});

function Preview() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .get("api/post")
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container preiview">
      {posts?.contents?.map((post) => {
        return (
          <PostBar
            key={post.pid}
            category={post.category}
            title={post.title}
            uid={post.uid}
            username={post.username}
            createdAt={post.createdAt?.substring(0,10)}
          />
        );
      })}
    </div>
  );
}

export default Preview;
