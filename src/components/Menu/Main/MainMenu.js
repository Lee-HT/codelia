import useCategoryGroup from "hooks/Category/CategoryGroup/useCategoryGroup";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserInfo from "../../Action/InfoAction";
import "./MainMenu.css";

const Parent = styled.div`
  border: 0;
  border-radius: 5px;
  background-color: white;
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
  padding-left: 2%;
  text-align: start;
`;

const Button = styled.button`
  border: 0;
  border-radius: 5px;
  background-color: white;
  margin-top: 5px;
  padding-left: 5px;
  overflow: hidden;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const Ul = styled.ul`
  background-color: cornflowerblue;
  list-style: none;
  margin: 0 auto;
  padding-left: 0;
  width: 90%;
`;

const Li = styled.li`
  padding-left: 10%;
  text-align: start;
`;

export default function MainMenu() {
  const navigate = useNavigate();
  const { category, getCategoryGroup } = useCategoryGroup();
  // key = category 이름 value = 표기명

  function CategoryLink(category) {
    navigate("/post?category=" + category);
  }

  useEffect(() => {
    getCategoryGroup();
  }, [getCategoryGroup]);

  return (
    <div className="main-menu">
      <UserInfo />
      <Button
        style={{ marginLeft: "5%" }}
        onClick={() => {
          navigate("/post");
        }}
      >
        {"전체 게시글"}
      </Button>
      {Object.entries(category)?.map(([parent, ctg]) => {
        return (
          <Ul key={parent}>
            <Parent>{parent}</Parent>
            {ctg?.map((name) => {
              return (
                <Li key={name}>
                  <Button
                    onClick={() => {
                      CategoryLink(name);
                    }}
                  >
                    {name}
                  </Button>
                </Li>
              );
            })}
          </Ul>
        );
      })}
    </div>
  );
}
