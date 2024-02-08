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
      <button className="menu-btn" onClick={handleMenu}>
        <img
          className="menu-img"
          src={process.env.PUBLIC_URL + "/Image/MenuIcon/Kebab.png"}
          alt="Menu"
          loading="lazy"
        />
      </button>
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
