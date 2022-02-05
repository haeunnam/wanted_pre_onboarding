import { useEffect, useState } from "react";
import styled from "styled-components";
const data = [
  "abc",
  "ABC",
  "drum",
  "dry",
  "you",
  "young",
  "zero",
  "zoo",
  "중고A급",
  "안녕",
  "안우",
];

function AutoComplete() {
  const [inputVal, setInputVal] = useState("");
  const [searchedList, setSerchedList] = useState([]);

  function onChangeInputVal(e) {
    setInputVal(e.target.value);
  }

  function resetInpuVal(e) {
    setInputVal("");
  }

  function onValueUpdate(newVal) {
    setInputVal(newVal);
  }

  useEffect(() => {
    if (inputVal) {
      onSearch();
    } else {
      setSerchedList([]);
    }
  }, [inputVal]);

  function onSearch() {
    const newList = data.filter((item) =>
      item.toLowerCase().includes(inputVal.toLowerCase())
    );
    setSerchedList(newList);
  }

  return (
    <>
      <InputContainer>
        <InputBox value={inputVal} onChange={onChangeInputVal} />
        <button className="delete-btn" onClick={resetInpuVal}>
          x
        </button>
      </InputContainer>
      {inputVal && (
        <Dropdown>
          {searchedList.length ? (
            searchedList.map((keyword, idx) => (
              <SearchedItem key={idx} onClick={() => onValueUpdate(keyword)}>
                {keyword}
              </SearchedItem>
            ))
          ) : (
            <div>검색결과가 없습니다.</div>
          )}
        </Dropdown>
      )}
    </>
  );
}

export default AutoComplete;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 800px;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.24);
  border-radius: 10px;
  padding: 6px 10px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.24);
  .delete-btn {
    cursor: pointer;
  }
`;

const InputBox = styled.input`
  border: none;
  background-color: transparent;
  height: 50px;
  flex-grow: 1;
`;

const Dropdown = styled.div`
  width: 800px;
  background-color: white;
  padding: 6px 10px 10px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.24);
  margin-top: -10px;
  border: 1px solid rgba(0, 0, 0, 0.24);
  border-radius: 0 0 10px 10px;
`;

const SearchedItem = styled.div`
  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
