import UserProfile from "components/User/Profile/UserProfile";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./PostBar.css";

const PostDiv = styled.div`
  height: ${(props) => props.height || "30px"};
  max-height: ${(props) => props.height || "30px"};
`;
const Button = styled.button`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 0;

  &:hover {
    text-decoration: underline;
  }
`;

export default function PostBar(props) {
  const navigate = useNavigate();

  function handlePost() {
    navigate("/post/" + props.pid);
  }

  return (
    <PostDiv className="row border-1 rounded post-bar" height={props.height}>
      <Button className="col-1 post-category-link">{props.category}</Button>
      <Button className="col post-title-link" onClick={handlePost}>
        {props.title}
      </Button>
      <div className="col-2 post-user-link">
        <UserProfile username={props.username} height={props.height} />
      </div>
      <div className="row col-2 post-info">
        <div className="post-created-date">{props.createdAt}</div>
        <div className="post-view-count">{props.view}</div>
      </div>
    </PostDiv>
  );
}
