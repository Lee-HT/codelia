import axios from "axios";
import { useEffect, useState } from "react";

export const client = axios.create({
  baseURL: "http://localhost:6550",
  timeout: 3000,
  responseType: "json",
});

function Postview() {
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
    <div className="postview">
      {posts?.contents?.map((post) => {
        return (
          post.pid
        );
      })}
    </div>
  );
}

export default Postview;
