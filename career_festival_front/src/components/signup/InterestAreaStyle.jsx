// InterestAreaStyle.jsx

import styled from "styled-components";

const InterestAreaStyle = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    font-size: 16px;
    margin-bottom: 5px;
  }

  button {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid;
    border-radius: 5px;
    cursor: pointer;
  }

  /* 모달 버튼 스타일링 추가 */
  .ModalButton {
    background-color: #582fff;
    color: #fff;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  /* 모달 스타일링 추가 */
  .Modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    z-index: 1;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: ${(props) => (props.isOpen ? "block" : "none")};
  }

  /* 모달 컨텐츠 스타일링 추가 */
  .ModalContent {
    /* 수정: 여백 추가 */
    margin: 20px 0;
    text-align: center; /* 가운데 정렬을 위한 스타일 추가 */

    label {
      display: block;
      font-size: 16px;
      margin-bottom: 5px;
    }

    button {
      width: 100%;
      padding: 10px;
      font-size: 16px;
      border: 1px solid;
      border-radius: 5px;
      cursor: pointer;
      margin-bottom: 10px; /* 버튼 간 여백 추가 */
    }
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  z-index: 1;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const ModalContent = styled.div`
  margin-bottom: 20px;
`;

const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const OptionList = styled.div`
  display: flex;
  flex-wrap: wrap;
  // gap: 10px; /* 각 버튼 간 여백 추가 */

  button {
    width: calc(50% - 5px); /* 2칸씩 보이도록 스타일 수정 */
    margin: 5px;
    padding: 8px;
    font-size: 14px;
    border: 1px solid;
    border-radius: 5px;
    cursor: pointer;

    /* 선택된 버튼 스타일링 */
    &[selected] {
      background-color: #4caf50;
      color: white;
    }
  }
`;

export {
  InterestAreaStyle,
  Modal,
  ModalContent,
  SelectWrapper,
  OptionList,
};
