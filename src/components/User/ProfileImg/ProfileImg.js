import styled from "styled-components";
import "./ProfileImg.css";

const ProfileImage = styled.img`
  border-radius: 25%;
  margin: 5%;
  width: 90%;
  aspect-ratio: 1;
`;

export default function ProfileImg(props) {
  return (
    <div className="img-area">
      <ProfileImage
        title="profile"
        alt="profile"
        src={props.imgLink}
        loading="lazy"
      />
    </div>
  );
}
