import "./UserProfile.css";

export default function UserProfile(props) {
  return <button className="user-profile">{props.username}</button>;
}