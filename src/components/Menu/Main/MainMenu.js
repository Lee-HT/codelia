import useCategoryGroup from "hooks/Category/CategoryGroup/useCategoryGroup";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./MainMenu.css";
import InfoAction from "components/Action/InfoAction";

const Parent = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: white;
  font-size: 18px;
  font-weight: bold;
  margin-top: 5px;
  padding-left: 2%;
  text-align: start;
  background-color: rgba(64, 64, 64, 0.15);
`;

const Button = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: rgba(64, 64, 64, 0.15);
  border-radius: 5px;
  margin-top: 5px;
  padding-left: 5px;
  overflow: hidden;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

const Ul = styled.ul`
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
      <InfoAction />
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
