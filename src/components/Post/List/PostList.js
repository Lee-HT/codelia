import { api } from "API";
import PostBar from "components/Post/Bar/PostBar";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import "./PostList.css";

export default function PostList(props) {
  const Button = styled.button`
    height: 80%;
    border: 0;
    background-color: transparent;

    &:hover {
      text-decoration: underline;
    }
  `;

  const [posts, setPosts] = useState([]);
  const [params, setParams] = useState({
    page: props.page,
    size: props.size,
  });
  const postHeight = props.height || "35px";

  const setPageSize = useCallback((size) => {
    try {
      setParams((prev) => ({ ...prev, "size": size }));
    } catch (error) {
      console.log(error);
    }
  }, []);

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

  const sizeList = [15, 30];

  return (
    <div className="post-list">
      <div className="post-page">
        {sizeList?.map((size, index) => {
          return (
            <Button key={index} onClick={() => setPageSize(size)}>
              {size}
            </Button>
          );
        })}
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
