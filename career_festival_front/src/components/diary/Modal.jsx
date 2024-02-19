import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalOverlay = styled.div`
`;

const Modal = ({ onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer>
        <h2 style={{ color: "#582fff" }}>경고</h2>
        <p>5000자가 넘었습니다!</p>
        <button
          style={{
            background: "#582fff",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          닫기
        </button>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
