import { api } from "API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostDetail(props) {
  const [post, setPost] = useState([]);
  const params = useParams();

  useEffect(() => {
    api
      .get("api/post/" + params.pid)
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
      })
      .catch((error) => console.log(error));
  }, [params.pid]);

  return <div className="postview">{post.pid}</div>;
}
