import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserInfo from "../User/UserInfo";
import "./MainMenu.css";

const Button = styled.button`
  border: 0;
  border-radius: 5px;
  background-color: white;
  margin: 2px auto;

  &:hover {
    text-decoration: underline;
  }
`;

export default function MainMenu() {
  const navigate = useNavigate();
  // key = category 이름 value = 표기명
  const [categories, setCategories] = useState({
    "": "전체 게시글",
  });

  async function CategoryLink(category) {
    navigate("/post/category/" + category);
  }

  return (
    <div className="main-menu">
      <UserInfo />
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
