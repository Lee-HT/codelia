import "./Notification.css";

const containers = "box border-4 border-color rounded";

export default function Notification(props) {
  if ((bool) => {props.texts.isArray()}) {
    return (
      <div className={containers}>
        {props?.texts?.map((text) => {
          return <div key={text.key} className="info">{text}</div>;
        })}
      </div>
    );
  }
  return (
    <div className={containers}>
        return <div className="info">{props.texts}</div>;
    </div>
  );
}
