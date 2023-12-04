import axios from "axios";
import { useEffect, useState } from "react";

export const client = axios.create({
  baseURL: "http://localhost:6550",
  timeout: 3000,
  responseType: "json",
});

function Postview() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    client
      .get("api/post")
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="postview">
      {post?.contents?.map((post) => {
        return <div>Postview</div>
      })}
    </div>
  );
}

export default Postview;
