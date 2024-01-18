import "./Notification.css";

export default function Notification(props) {
  return (
    <div className="notification border-4 border-color rounded">
      {Array.isArray(props.texts) ? (
        <div>
          {props.texts.map((text,index) => {
            return (
              <div key={index} className="notification-text">
                {text}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="info">{props?.texts}</div>
      )}
    </div>
  );
}
