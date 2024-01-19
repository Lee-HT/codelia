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
    <div className="profile-img">
      <ProfileImage
        title="my profile image"
        alt="my profile image"
        src={props.imgLink}
      />
    </div>
  );
}
