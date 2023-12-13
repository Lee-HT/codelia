import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./PostBar.css";
import UserProfile from "components/User/Profile/UserProfile";

export default function PostBar(props) {
  const navigate = useNavigate();
  const PostDiv = styled.div`
    height: ${props.height || "30px"};
    max-height: ${props.height || "30px"};
  `;
  const Button = styled.button`
    border: 0;
    max-height: ${props.height || "30px"};

    &:hover {
      text-decoration: underline;
    }
  `;
  const PostInfo = styled.div`
    max-height: ${props.height || "30px"};
  `

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
      <PostInfo className="row col-2 post-info">
        <div className="post-created-date">{props.createdAt}</div>
        <div className="post-view-count">{props.view}</div>
      </PostInfo>
    </PostDiv>
  );
}
