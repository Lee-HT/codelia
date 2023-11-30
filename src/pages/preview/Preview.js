import { useEffect, useState } from "react";
import "./Preview.css";
import axios from "axios";

import PostBar from "components/Post/Bar/PostBar";

export const client = axios.create({
  baseURL: "http://localhost:6550",
  // timeout: 3000,
  // headers: {
  //   // "Content-Type": "application/json",
  // //   "Access-Control-Allow-Origin": "http://localhost:6551",
  // //   "Aceess-Control-Allow-Method": "*",
  // },
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
    <div className="Preiview">
      {posts?.contents?.map((post) => {
        return <PostBar key={post.pid} title={post.title} />;
      })}
    </div>
  );
}

export default Preview;
