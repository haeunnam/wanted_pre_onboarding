import { useState } from "react";
import styled from "styled-components";

const numToStr = {
  0: "ONE",
  1: "TWO",
  2: "THREE",
};

function Tab() {
  const [selectedTab, setSelectedTab] = useState(0);

  function handleTabClick(id) {
    setSelectedTab(id);
  }

  return (
    <>
      <TabContainer>
        {[0, 1, 2].map((idx) => (
          <TabItem
            key={idx}
            onClick={() => handleTabClick(idx)}
            className={selectedTab === idx ? "active" : ""}
          >
            Tab{idx + 1}
          </TabItem>
        ))}
      </TabContainer>
      <p>Tab menu {numToStr[selectedTab]}</p>
    </>
  );
}

export default Tab;

const TabContainer = styled.ul`
  display: flex;
  width: 600px;
  padding: 0 0 0 50px;
  background-color: #e0e0e0;
`;

const TabItem = styled.li`
  width: 200px;
  height: 50px;
  font-size: 20px;
  color: gray;
  line-height: 50px;
  padding-left: 20px;
  cursor: pointer;
  &.active {
    background-color: #4801cd;
    color: #fff;
  }
`;
