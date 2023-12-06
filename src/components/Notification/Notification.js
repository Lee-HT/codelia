import "./Notification.css";

export default function Notification(props) {
  return (
    <div className="box border-4 border-color rounded">
      {Array.isArray(props.texts) ? (
        <p>
          {props.texts.map((text) => {
            return (
              <div key={text.key} className="info">
                {text}
              </div>
            );
          })}
        </p>
      ) : (
        <div className="info">{props?.texts}</div>
      )}
    </div>
  );
}
