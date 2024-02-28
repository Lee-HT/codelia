import Paginations from "components/Menu/Pagination/Paginations";
import PostBar from "components/Post/Bar/PostBar";
import SimpleProfile from "components/User/Profile/SimpleProfile";
import usePostsByUserGet from "hooks/Post/PostPageGet/usePostsByUserGet";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function WritePosts() {
  const [pathParams] = useSearchParams();
  const limit = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const params = useMemo((currentPage) => {
    return { page: currentPage - 1, size: 0 };
  }, []);
  const { posts, getPostPage, totalElements } = usePostsByUserGet(setTotalPage);

  useEffect(() => {
    getPostPage(params, pathParams.get("uid"));
  }, [params, currentPage, getPostPage, pathParams]);

  return (
    <div>
      <SimpleProfile
        uid={pathParams.get("uid")}
        totalElements={totalElements}
      />
      {posts?.map((post) => {
        return (
          <PostBar
            key={post.pid}
            height={"35px"}
            pid={post.pid}
            category={post.category}
            title={post.title}
            uid={post.uid}
            username={post.username}
            createdAt={post.createdAt?.substring(0, 10)}
          />
        );
      })}
      <Paginations
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
        limit={limit}
      />
    </div>
  );
}
