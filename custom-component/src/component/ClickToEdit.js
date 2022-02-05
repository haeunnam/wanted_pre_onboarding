import { useState } from "react";
import styled from "styled-components";

function ClickToEdit() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);

  function onBlurName(e) {
    if (!isNaN(e.target.value)) {
      alert("문자만 입력가능합니다.");
      e.target.value = "";
      return;
    }
    setName(e.target.value);
  }

  function onBlurAge(e) {
    if (isNaN(e.target.value) || !Number.isInteger(Number(e.target.value))) {
      alert("정확한 값을 입력해주세요.");
      e.target.value = "";
      return;
    }
    setAge(e.target.value);
  }

  function onEnterKeyUp(e) {
    if (e.key === "Enter") {
      e.target.blur();
    }
  }

  return (
    <>
      <InputContainer>
        <Label htmlFor="name">이름</Label>
        <Input id="name" onBlur={onBlurName} onKeyUp={onEnterKeyUp} />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="age">나이</Label>
        <Input id="age" onBlur={onBlurAge} onKeyUp={onEnterKeyUp} />
      </InputContainer>
      <Content>
        <span>이름 {name}</span>
        <span>나이 {age}</span>
      </Content>
    </>
  );
}

export default ClickToEdit;

const InputContainer = styled.div`
  font-size: 20px;
  margin-bottom: 30px;
`;

const Label = styled.label`
  margin-right: 6px;
`;

const Input = styled.input`
  text-align: center;
  line-height: 20px;
  border: 1px solid rgba(0, 0, 0, 0.24);
  border-radius: 4px;
  height: 30px;
  :focus {
    border-color: blue;
  }
`;

const Content = styled.p`
  span:first-child {
    margin-right: 10px;
  }
`;
