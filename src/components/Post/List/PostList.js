import { api } from "API";
import PostBar from "components/Post/Bar/PostBar";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import "./PostList.css";

const Button = styled.button`
  height: 80%;
  border: 0;
  background-color: transparent;
  font-size: 12px;

  &:hover {
    text-decoration: underline;
  }
`;

export default function PostList(props) {
  const sizeList = [5, 10, 15, 20, 25, 30];

  const [posts, setPosts] = useState([]);
  const [params, setParams] = useState({
    page: props.page,
    size: props.size,
  });
  const postHeight = props.height || "35px";

  useEffect(() => {
    async function getPosts() {
      try {
        console.log(params);
        const response = await api.get("post", { params });
        const { data } = response;
        if (response.status === 200) {
          console.log(data);
          setPosts(data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getPosts();
  }, [params]);

  const setPageSize = useCallback((size) => {
    try {
      setParams((prev) => ({ ...prev, size: size }));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="post-list">
      <div className="post-page">
        <select
          className="post-size"
          value={params.size}
          onChange={(event) => setPageSize(event.target.value)}
        >
          {sizeList?.map((size) => {
            return (
              <option key={size} value={size}>
                {size + "개"}
              </option>
            );
          })}
        </select>
      </div>
      {posts?.contents?.map((post) => {
        return (
          <PostBar
            key={post.pid}
            height={postHeight}
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
