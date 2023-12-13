import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./PostBar.css";
import UserProfile from "components/User/Profile/UserProfile";

export default function PostBar(props) {
  const navigate = useNavigate();
  const PostDiv = styled.div((props) => {
    return {
      height: props.height || "15px",
    };
  });
  const Button = styled.button`
    border: 0;

    &:hover {
      text-decoration: underline;
    }
  `;

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
        <UserProfile username={props.username} />
      </div>
      <div className="row col-2 post-info">
        <div className="post-created-date">{props.createdAt}</div>
        <div className="post-view-count">{props.view}</div>
      </div>
    </PostDiv>
  );
}
