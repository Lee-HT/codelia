import Pagination from "components/Menu/Pagination/Pagination";
import PostBar from "components/Post/Bar/PostBar";
import usePostPageGet from "hooks/Post/PostPageGet/usePostPageGet";
import { useCallback, useEffect, useState } from "react";
import "./PostList.css";

// props.notControl : 페이지네이션 여부
export default function PostList(props) {
  const sizeList = [5, 10, 15, 20, 25, 30];
  const pageLimit = 5;
  const [currentPage, setCurrentPage] = useState(props.page + 1);
  const [totalPage, setTotalPage] = useState(0);
  const [params, setParams] = useState({
    page: props.page,
    size: props.size,
  });
  const postHeight = props.height || "35px";

  const { posts, getPostPage, getPostCategory } = usePostPageGet(setTotalPage);

  useEffect(() => {
    params.page = currentPage - 1;
  }, [params, currentPage]);

  useEffect(() => {
    if (props.category) {
      getPostCategory(params, props.category);
    } else {
      getPostPage(params);
    }
  }, [currentPage, props.category, params, getPostCategory, getPostPage]);

  const setSize = useCallback((size) => {
    try {
      setParams((prev) => ({ ...prev, size: size }));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="post-list">
      {!props.notControl ? (
        <div className="post-page">
          <select
            className="post-size"
            value={params.size}
            onChange={(event) => setSize(event.target.value)}
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
      ) : null}

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
      {!props.notControl ? (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPage={totalPage}
          limit={pageLimit}
        />
      ) : null}
    </div>
  );
}
