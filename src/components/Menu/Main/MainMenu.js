import styled from "styled-components";
import "./MainMenu.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Button = styled.button`
  border: 0;
  background-color: transparents;
`;

export default function MainMenu() {
  const navigate = useNavigate();
  // key = category 이름 value = 표기명
  const [categories, setCategories] = useState({
    "": "게시글 목록",
  });

  async function CategoryLink(category) {
    navigate("/post/category/" + category);
  }

  return (
    <div className="main-menu">
      {Object.entries(categories)?.map(([category, name]) => {
        return (
          <Button
            key={category}
            onClick={() => {
              CategoryLink(category);
            }}
          >
            {name}
          </Button>
        );
      })}
    </div>
  );
}
