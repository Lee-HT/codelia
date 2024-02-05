import { useCallback, useRef, useState } from "react";
import PostControl from "../PostControl/PostControl";
import "./Setting.css";

export default function Setting(props) {
  const ref = useRef();
  const [isMenu, setIsMenu] = useState(false);

  const handleMenu = useCallback(() => {
    console.log(isMenu);
    setIsMenu(!isMenu);
  }, [isMenu, setIsMenu]);

  return (
    <div className="setting-area" ref={ref}>
      <input type="button" className="img-btn" onClick={handleMenu} />
      {isMenu ? (
        <PostControl
          isMenu={isMenu}
          setIsMenu={setIsMenu}
          pid={props.pid}
          inputRef={ref}
        />
      ) : null}
    </div>
  );
}
