import { useState } from "react";
import styled from "styled-components";

function Modal() {
  const [isModalOn, setIsModalOn] = useState(false);
  function handleModalClick() {
    setIsModalOn(!isModalOn);
  }

  return (
    <>
      <ModalBtn onClick={handleModalClick}>Open Modal</ModalBtn>
      {isModalOn && (
        <>
          <ModalBackground>
            <ModalLayout>
              <span onClick={handleModalClick} className="close-btn">
                X
              </span>
              <p className="content">HELLO CODESTATES!</p>
            </ModalLayout>
          </ModalBackground>
        </>
      )}
    </>
  );
}

export default Modal;

const ModalBtn = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 50px;
  background-color: #4801cd;
  transition: 0.5s ease-out;
  color: white;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const ModalLayout = styled.div`
  width: 400px;
  height: 140px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  .close-btn {
    cursor: pointer;
    color: #000000;
  }
  .content {
    color: #4801cd;
    font-size: 20px;
    flex-grow: 1;
    margin-top: 40px;
  }
`;
