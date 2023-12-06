import Notification from "components/Notification/Notification";
import "./NotFound.css";

const error_messages = ["페이지를 찾을 수 없습니다."];

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="error__notification">
        <Notification texts={error_messages}/>
      </div>
    </div>
  );
}
