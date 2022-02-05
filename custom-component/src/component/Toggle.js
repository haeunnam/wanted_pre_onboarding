import { useState } from "react";
import styled from "styled-components";

function Toggle() {
  const [isToggled, setIsToggled] = useState(false);
  function handleToggleClick() {
    setIsToggled(!isToggled);
  }

  return (
    <>
      <ToggleBtn
        className={`toggle-btn ${isToggled ? "background-change" : ""}`}
        onClick={handleToggleClick}
      >
        <Circle className={`${isToggled ? "moved" : ""}`}></Circle>
      </ToggleBtn>
      <p>{isToggled ? "Toggle Switch ON" : "Toggle Switch OFF"}</p>
    </>
  );
}

export default Toggle;

const ToggleBtn = styled.button`
  position: relative;
  width: 100px;
  height: 40px;
  border-radius: 40px;
  background-color: #c5c5c5;
  background: linear-gradient(to left, #c5c5c5 50%, #4801cd 50%) right;
  background-size: 200%;
  transition: 0.5s ease-out;
  &.background-change {
    background-position: left;
  }
`;

const Circle = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 5px;
  left: 5px;
  border-radius: 50%;
  background-color: #fff;
  transition: all 0.5s ease;
  &.moved {
    left: 60px;
  }
`;
