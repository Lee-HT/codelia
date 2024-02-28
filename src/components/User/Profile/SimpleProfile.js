import useUserGet from "hooks/User/UserGet/useUserGet";
import { useEffect } from "react";
import styled from "styled-components";
import ProfileImg from "../ProfileImg/ProfileImg";
import "./SimpleProfile.css";
import UserProfile from "./UserProfile";

const Infobox = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10px;
`;

export default function SimpleProfile(props) {
  const { user, getUser } = useUserGet();

  useEffect(() => {
    getUser(props.uid);
  }, [getUser, props.uid]);

  return (
    <div className="simple-profile">
      <ProfileImg imgLink={user.profilePic} />
      <div className="profile-area">
        <div className="username">
          <UserProfile username={user.username} uid={user.uid} />
        </div>
        <div className="info">
          <Infobox>
            <div className="description">작성글</div>
            <div>{props.totalElements}</div>
          </Infobox>
        </div>
      </div>
    </div>
  );
}
