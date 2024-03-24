import styled from "styled-components";
import "./PostContents.css";
import useTranslate from "hooks/Traslate/useTranslate";
import { useCallback, useState } from "react";

const Button = styled.button`
  &:active {
    border: 1px solid;
  }

  background-color: ${(props) => (props.isTrans ? "darkgrey" : "white")};
`;

const Image = styled.img`
  width: 15px;
`;

export default function PostContents(props) {
  const [isTraslate, setIsTranslate] = useState(false);
  const { translation, getTranslation } = useTranslate();

  const handleTraslate = useCallback(async () => {
    if (translation == null) {
      await getTranslation(props.contents);
    }
    setIsTranslate(!isTraslate);
  }, [getTranslation, props.contents, isTraslate, setIsTranslate, translation]);

  return (
    <div className="contents-container">
      <div className="control-area">
        <Button onClick={handleTraslate} isTrans={isTraslate}>
          <Image
            title="translate"
            src={process.env.PUBLIC_URL + "/Assets/MenuIcon/Translate.png"}
            alt="translate"
            loading="lazy"
          ></Image>
        </Button>
      </div>
      <div className="contents">
        {isTraslate ? translation : props.contents}
      </div>
    </div>
  );
}
