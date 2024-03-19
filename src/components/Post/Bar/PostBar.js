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
    <PostDiv className="menu-box rounded post-bar" height={props.height}>
      <Button className="category-size category-link">{props.category}</Button>
      <Button className="title-size title-link" onClick={handlePost}>
        {props.title}
      </Button>
      <div className="username-size username">
        <UserProfile username={props.username} uid={props.uid} />
      </div>
      <div className="information-size information">
        <div className="created-date">{props.createdAt}</div>
        <div className="view-count">{props.view}</div>
      </div>
    </PostDiv>
  );
}
