import styled from "styled-components";
import "./UserProfile.css";

export default function UserProfile(props) {
  const Button = styled.button`
    border:0;
    
    &:hover {
      text-decoration: underline;
    }
  `;

  return <Button className="user-profile">{props.username}</Button>;
}
