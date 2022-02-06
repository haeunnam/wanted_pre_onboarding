import { useState } from "react";
import styled from "styled-components";

function Tag() {
  const [hashtag, setHashtag] = useState("");
  const [hashtagList, setHashtagList] = useState([]);

  function onChangeHashtag(e) {
    setHashtag(e.target.value);
  }

  function onEnterKeyUp(e) {
    if (e.target.value && e.key === "Enter") {
      addHashTag(e.target.value);
    }
  }

  function addHashTag(newTag) {
    const newHashTagList = [...hashtagList];
    setHashtag("");

    // 중복 태그 처리
    const isDuplicated = () => {
      return newHashTagList.find((tag) => tag === newTag);
    };
    if (isDuplicated()) {
      alert("중복된 태그가 존재합니다.");
      return;
    }

    newHashTagList.push(newTag);
    setHashtagList(newHashTagList);
  }

  function removeHashtag(id) {
    const newHashTagList = hashtagList.filter((tag, idx) => idx !== id);
    setHashtagList(newHashTagList);
  }

  return (
    <>
      <TagBox>
        {hashtagList.map((hashtag, idx) => (
          <TagItem key={idx}>
            <span>{hashtag}</span>
            <button className="delete-btn" onClick={() => removeHashtag(idx)}>
              x
            </button>
          </TagItem>
        ))}
        <InputBox
          type="text"
          value={hashtag}
          onChange={onChangeHashtag}
          placeholder="Press Enter to add tags"
          onKeyUp={onEnterKeyUp}
        />
      </TagBox>
    </>
  );
}

export default Tag;

const TagBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 800px;
  border: 1px solid #4801cd;
  border-radius: 10px;
  padding: 5px;
  &:focus-within {
    border-color: black;
  }
`;

const InputBox = styled.input`
  border: none;
  float: left;
  min-height: 50px;
  flex-grow: 1;
`;

const TagItem = styled.div`
  display: flex;
  align-items: center;
  margin: 6px;
  padding: 5px 15px;
  height: 30px;
  background-color: #4801cd;
  border-radius: 6px;
  color: #fff;
  font-size: 16px;

  .delete-btn {
    color: #4801cd;
    background-color: #fff;
    padding: 0 5px;
    border-radius: 50%;
    text-align: center;
    line-height: 18px;
    margin-left: 6px;
    cursor: pointer;
  }
`;
