import { useEffect, useState } from "react";
import "./Preview.css";
import axios from "axios";

import PostBar from "components/Post/Bar/PostBar";

function Preview() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:6550/api/post")
    .then(response => setPosts(response.data))
    .catch(error => console.log(error))
  }, []);
  
  return (
    <div className="Preiview">
      {posts?.contents?.map((post) => {
        <PostBar key={post.pid} title={post.title} />;
      })}
    </div>
  );
}

export default Preview;
